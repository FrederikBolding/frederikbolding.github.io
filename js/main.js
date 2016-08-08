$(function () {
  $(".social-icon.start").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
      if ($(this).hasClass("start")) {
        $(this).removeClass("start");
        $(this).addClass("done");
      }
    });
  $("#first-part").typed({
    stringsElement: $('#first-part-string'),
    callback: function () {
      $(".typed-cursor").first().hide();
      $("#second-part").typed({
        stringsElement: $('#second-part-strings'),
        typeSpeed: 0,
        shuffle: true,
        loop: true
      });
    },
  });
});