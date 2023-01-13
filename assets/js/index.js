//Copying = https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
//Promise-Then = https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified

$(function () {
  $(".copy-btn").click(function () {
    $("#textField").select();
    navigator.clipboard.writeText($("#textField").val()).then(
      (success) => console.log("text copied"),
      (err) => console.log("error copying text")
    );
    $(this).css({ transform: "scale(.98)" });
    setTimeout(function () {
      $(".copy-btn").css({ transform: "scale(1)" });
    }, 100);

    $(".copied1").css({ transform: "scale(.2)", opacity: ".05" });
    setTimeout(function () {
      $(".copied1").css({ transform: "scale(.6)", opacity: ".08" });
      setTimeout(function () {
        $(".copyBox").append(`<span class="copied2">COPIED!</span>`);
        $(".copied1").css({ transform: "scale(1.2)", opacity: ".11" });
        setTimeout(function () {
          $(".copied1").css({ transform: "scale(1.6)", opacity: ".14" });
          setTimeout(function () {
            $(".copied1").css({ transform: "scale(2.2)", opacity: ".17" });
            setTimeout(function () {
              $(".copied1").css({ transform: "scale(1)", opacity: "0" });
              $(".copied2").remove();
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  });
});
