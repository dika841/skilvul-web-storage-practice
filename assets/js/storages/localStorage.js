export const handleLocalStorage = (data) => {
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify([data]));
  } else {
    localStorage.setItem(
      "data",
      JSON.stringify([...JSON.parse(localStorage.getItem("data")), data])
    );
  }
  return JSON.parse(localStorage.getItem("data"));
};

export const handleNewLocalStorageData = (data) => {
  localStorage.setItem("data", JSON.stringify([data]));
  return JSON.parse(localStorage.getItem("data"));
};
