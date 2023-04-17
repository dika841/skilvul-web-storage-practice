export const handleSessionStorage = (data) => {
  if (sessionStorage.getItem("data") == null) {
    sessionStorage.setItem("data", JSON.stringify([data]));
  } else {
    sessionStorage.setItem(
      "data",
      JSON.stringify([...JSON.parse(sessionStorage.getItem("data")), data])
    );
  }
  return JSON.parse(sessionStorage.getItem("data"));
};

export const handleNewSessionStorageData = (data) => {
  sessionStorage.setItem("data", JSON.stringify([data]));
  return JSON.parse(sessionStorage.getItem("data"));
};
