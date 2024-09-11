$(() => {
  console.log("jQuery loaded");

  $("#navtoggle").on("change", () => {
    $(".navmenu").toggleClass("active");
    $(".hamburger").toggleClass("active");
  });

  window.onscroll = () => {
    if (window.scrollY > 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  };
});
