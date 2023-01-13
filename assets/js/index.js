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

    $(".copied").css({ transform: "scale(2)", opacity: "0.4" });
    setTimeout(function () {
      $(".copied").css({ transform: "scale(1)", opacity: "0" });
    }, 100);
  });
});
