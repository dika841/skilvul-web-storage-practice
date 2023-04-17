export const handleCookie = (data) => {
  if (document.cookie == "") {
    document.cookie = JSON.stringify([data]);
  } else {
    document.cookie = JSON.stringify([...JSON.parse(document.cookie), data]);
  }

  return JSON.parse(document.cookie);
};

export const handleNewCookieData = (data) => {
  document.cookie = JSON.stringify([data]);
  return JSON.parse(document.cookie);
};
