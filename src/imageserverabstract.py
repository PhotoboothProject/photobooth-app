"""
abstract for the imageserver backends
"""
import logging
import dataclasses
from multiprocessing import shared_memory, Condition, Lock
from abc import ABC, abstractmethod
from pymitter import EventEmitter
from src.configsettings import settings

logger = logging.getLogger(__name__)


class ImageServerAbstract(ABC):
    """
    Imageserver abstract to create backends.
    """

    @abstractmethod
    def __init__(self, evtbus: EventEmitter, enable_stream: bool):
        # public
        self.exif_make = "ImageServerAbstract-Make"
        self.exif_model = "ImageServerAbstract-Model"
        self.metadata = {}

        # private
        self._enable_stream = enable_stream
        self._fps = 0

        self._evtbus = evtbus
        self._evtbus.on("statemachine/armed", self._on_capture_mode)

        self._evtbus.on("onCaptureMode", self._on_capture_mode)
        self._evtbus.on("onPreviewMode", self._on_preview_mode)

        super().__init__()

    @abstractmethod
    def gen_stream(self):
        """
        yield jpeg images to stream to client (if not created otherwise)
        """

    # @property
    # @abstractmethod
    # def stream_url(self):
    #    """
    #    get the default backend stream
    #    """
    #    pass

    @abstractmethod
    def trigger_hq_capture(self):
        """
        trigger one time capture of high quality image
        """

    @abstractmethod
    def wait_for_hq_image(self):
        """
        function blocks until high quality image is available
        """

    @abstractmethod
    def start(self):
        """To start the backend to serve"""

    @abstractmethod
    def stop(self):
        """To stop the backend to serve"""

    #
    # INTERNAL FUNCTIONS TO BE IMPLEMENTED
    #

    @abstractmethod
    def _wait_for_lores_image(self):
        """
        function blocks until frame is available for preview stream
        """

    @abstractmethod
    def _wait_for_lores_frame(self):
        """
        function blocks until frame is available for autofocus usually
        """

    @abstractmethod
    def _on_capture_mode(self):
        """called externally via events and used to change to a capture mode if necessary"""

    @abstractmethod
    def _on_preview_mode(self):
        """called externally via events and used to change to a preview mode if necessary"""


#
# INTERNAL FUNCTIONS to operate on the shared memory exchanged between processes.
#


@dataclasses.dataclass
class SharedMemoryDataExch:
    """
    bundle data array and it's condition.
    1) save some instance attributes and
    2) bundle as it makes sense
    """

    sharedmemory: shared_memory.SharedMemory = shared_memory.SharedMemory(
        create=True,
        size=settings._shared_memory_buffer_size,  # pylint: disable=protected-access
    )
    condition: Condition = Condition()
    lock: Lock = Lock()


def decompile_buffer(shm: memoryview) -> bytes:
    """
    decompile buffer holding jpeg buffer for transport between processes
    in shared memory
    constructed as
    INT(4bytes)+JPEG of length the int describes

    Args:
        shm (memoryview): shared memory buffer

    Returns:
        bytes: concat(length of jpeg+jpegbuffer)
    """
    # ATTENTION: shm is a memoryview; sliced variables are also a reference only.
    # means for this app in consequence: here is the place to make a copy
    # of the image for further processing
    # ATTENTION2: this function needs to be called with lock aquired
    length = int.from_bytes(shm.buf[0:4], "big")
    ret: memoryview = shm.buf[4 : length + 4]
    return ret.tobytes()


def compile_buffer(shm: memoryview, jpeg_buffer: bytes) -> bytes:
    """
    compile buffer holding jpeg buffer for transport between processes
    in shared memory
    constructed as
    INT(4bytes)+JPEG of length the int describes

    Args:
        shm (bytes): shared memory buffer
        jpeg_buffer (bytes): jpeg image
    """
    # ATTENTION: shm is a memoryview; sliced variables are also a reference only.
    # means for this app in consequence: here is the place to make a copy
    # of the image for further processing
    # ATTENTION2: this function needs to be called with lock aquired
    length: int = len(jpeg_buffer)
    length_bytes = length.to_bytes(4, "big")
    shm.buf[0:4] = length_bytes
    shm.buf[4 : length + 4] = jpeg_buffer
