$(() => {
  console.log("jQuery loaded");

  $("#navtoggle").on("change", () => {
    $(".navmenu").toggleClass("active");
    $(".hamburger").toggleClass("active");
  });
});
