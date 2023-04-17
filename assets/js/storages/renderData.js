export const renderData = (data) => {
  return data
    .map(
      (item) =>
        `<p>${item.firstName}<p>
    <p>${item.lastName}<p>
    <p>${item.gender}<p>
    <p>${item.address}<p>
    <br/>
    `
    )
    .join(" ");
};
