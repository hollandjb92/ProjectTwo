/* sticky navigation bar */
$(".js--section-features").waypoint(function (direction) {
  if (direction == "down") {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
}, {
  offset: "70px"
});

/* Scroll using jQuery instead of linking #ids */

$(".js--plans").click(function () {
  $("html, body").animate({
    scrollTop: $(".js--pricing").offset().top
  }, 1000);
});

$(".js--features").click(function () {
  $("html, body").animate({
    scrollTop: $(".js--section-features").offset().top
  }, 1000);
});

/* Nav Bar Smooth Scrolling */

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Animations on Scrolling */
$(".js--waypoint-1").waypoint(function (direction) {
  $(".js--waypoint-1").addClass("animated fadeIn");
}, {
  offset: "60%"
});

$(".js--waypoint-2").waypoint(function (direction) {
  $(".js--waypoint-2").addClass("animated fadeInUp");
}, {
  offset: "60%"
});

$(".js--waypoint-3").waypoint(function (direction) {
  $(".js--waypoint-3").addClass("animated fadeIn");
}, {
  offset: "60%"
});

$(".js--waypoint-4").waypoint(function (direction) {
  $(".js--waypoint-4").addClass("animated pulse");
}, {
  offset: "60%"
});

/* Mobile Navigation */

$(".js--mobileNav").click(function () {
  var navMenu = $(".js--mainNav");
  var icon = $(".js--mobileNav i");

  navMenu.slideToggle(200);
  if (icon.hasClass("fa-bars")) {
    icon.addClass("fa-times");
    icon.removeClass("fa-bars");
  } else {
    icon.addClass("fa-bars");
    icon.removeClass("fa-times");

    if ($(window).width() > 767) {
      $(".main-nav").css("display", " ");
    }
  }



});