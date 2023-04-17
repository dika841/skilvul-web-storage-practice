import { handleLocalStorage } from "./storages/localStorage.js";
import { handleSessionStorage } from "./storages/sessionStorage.js";
import { handleCookie } from "./storages/cookie.js";
import { renderData } from "./storages/renderData.js";
import { handleNewLocalStorageData } from "./storages/localStorage.js";
import { handleNewSessionStorageData } from "./storages/sessionStorage.js";
import { handleNewCookieData } from "./storages/cookie.js";

const storage = document.getElementById("storage");
const buttonShowAllData = document.getElementById("isShowAll");
const buttonShowNewData = document.getElementById("isShowNew");
const local = document.getElementById("localData");
const session = document.getElementById("sessionData");
const cookie = document.getElementById("cookieData");

const data = () => ({
  firstName: document.getElementById("firstname").value,
  lastName: document.getElementById("lastname").value,
  gender: document.getElementById("gender").value,
  address: document.getElementById("address").value,
});

const handleShowAllData = (e) => {
  e.preventDefault();

  if (storage.value == "local-storage") {
    local.innerHTML = renderData(handleLocalStorage(data()));
  } else if (storage.value == "session-storage") {
    session.innerHTML = renderData(handleSessionStorage(data()));
  } else if (storage.value == "cookie") {
    cookie.innerHTML = renderData(handleCookie(data()));
  } else {
    console.log("Invalid");
  }
};

const handleShowNewData = (e) => {
  e.preventDefault();
  if (storage.value == "local-storage") {
    local.innerHTML = renderData(handleNewLocalStorageData(data()));
  } else if (storage.value == "session-storage") {
    session.innerHTML = renderData(handleNewSessionStorageData(data()));
  } else if (storage.value == "cookie") {
    cookie.innerHTML = renderData(handleNewCookieData(data()));
  } else {
    console.log("Invalid");
  }
};

buttonShowAllData.addEventListener("click", handleShowAllData);
buttonShowNewData.addEventListener("click", handleShowNewData);
