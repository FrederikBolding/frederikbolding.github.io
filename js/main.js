$(function () {
  $(".social-icon").each(function (i) {
    $(this).removeClass("done");
    $(this).addClass("start");
  });
  $(".social-icon.start").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
      if ($(this).hasClass("start")) {
        $(this).removeClass("start");
        $(this).addClass("done");
      }
    });
  $("#first-part").typed({
    stringsElement: $('#first-part-string')
  });
  $(".noselect").on('mousedown touchstart', function (event) {
    event.preventDefault();
  });
  $(".noselect").on('mousemove touchmove', function (event) {
    event.preventDefault();
  });
});