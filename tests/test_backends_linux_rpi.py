import logging
from importlib import reload

import pytest

import photobooth.services.config
from photobooth.utils.helper import is_rpi

from .backends_utils import get_images

reload(photobooth.services.config)  # reset config to defaults.
logger = logging.getLogger(name=None)

## check skip if wrong platform

if not is_rpi():
    pytest.skip(
        "platform not raspberry pi, test of backends skipped",
        allow_module_level=True,
    )


## fixtures


@pytest.fixture()
def backend_picamera2():
    from photobooth.services.backends.picamera2 import Picamera2Backend

    # setup
    backend = Picamera2Backend()

    # deliver
    backend.start()
    yield backend
    backend.stop()


## tests


def test_getImages(backend_picamera2):
    get_images(backend_picamera2)
