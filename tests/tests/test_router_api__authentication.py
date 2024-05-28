import pytest
from fastapi.testclient import TestClient

from photobooth.application import app


@pytest.fixture
def client() -> TestClient:
    with TestClient(app=app, base_url="http://test/api/") as client:
        yield client


@pytest.fixture(scope="module")
def test_user():
    return {"username": "admin", "password": "0000"}


@pytest.fixture(scope="module")
def test_user_nonexistant_username():
    return {"username": "admin_nonexists", "password": "doesntmatter"}


@pytest.fixture(scope="module")
def test_user_wrong_pw():
    return {"username": "admin", "password": "wrongPW"}


def test_login(client: TestClient, test_user):
    response = client.post("/admin/auth/token", data=test_user)
    assert response.status_code == 200
    token = response.json()["access_token"]
    assert token is not None
    return token


def test_login_wrong_user(client: TestClient, test_user_nonexistant_username):
    response = client.post("/admin/auth/token", data=test_user_nonexistant_username)
    assert response.status_code == 401
    json = response.json()
    assert json.get("access_token", None) is None
    assert json.get("detail", None) is not None


def test_login_user_ok_password_wrong(client: TestClient, test_user_wrong_pw):
    response = client.post("/admin/auth/token", data=test_user_wrong_pw)
    assert response.status_code == 401
    json = response.json()
    assert json.get("access_token", None) is None
    assert json.get("detail", None) is not None
