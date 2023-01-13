$(function () {
  $(".copy-btn").click(function () {
    $(this).css({ transform: "scale(.9)" });
    setTimeout(function () {
      $(".copy-btn").css({ transform: "scale(1)" });
    }, 100);
  });
});
