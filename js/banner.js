const minutes = 60000;

window.addEventListener("load", () => {
  document.getElementsByClassName("wpcc-btn")[0].href =
    "/files/Hygienekonzept Tanz Sport Academy Allround e.V.pdf";
  const now = new Date();
  const fiveMinutes = new Date(now.getTime() + 2 * minutes);
  console.log(now.getTime());
  // document.cookie = document.cookie + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  console.log("UTC: " + fiveMinutes.toUTCString());
  document.cookie =
    document.cookie + `;expires=${fiveMinutes.toUTCString()};path=/;`;
});
