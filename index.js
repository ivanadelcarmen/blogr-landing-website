// navbar functions

$(".nav-item").click(function() {
  $(".nav-item img").css("transition", "all 0.3s");
  $(this).toggleClass("item-active");
  $(this).next().css("opacity", "1").slideToggle();
  $(".nav-item").not(this).removeClass("item-active");
  if (window.matchMedia("(min-width: 1050px)").matches) {
    $(".nav-item").not(this).next().animate({opacity: 0}, 200).slideUp();
  } else {
    $(".nav-item").not(this).next().slideUp();
  }
});

$("body").click(function(event) {
  if (window.matchMedia("(min-width: 1050px)").matches) {
    if (!$(event.target).is(".nav-item") && !$(event.target).is(".dropdown") && !$(event.target.parentNode).is(".dropdown")) {
      $(".nav-item img").css("transition", "none");
      $(".nav-item").removeClass("item-active");
      $(".nav-item").next().hide();
    }
  }
});

$(".icon-hamburger").click(function() {
  if ($(this).attr("src") === "./images/icon-hamburger.svg") {
    $(this).attr("src", "./images/icon-close.svg");
    $(this).css("width", "30px");
    if (window.matchMedia("(min-width: 500px)").matches) {
      $(".collapsable-menu").css("display", "block").animate({left: "10%", opacity: "1"});
    } else {
      $(".collapsable-menu").css("display", "block").animate({left: "8%", opacity: "1"});
    }
  } else {
    $(this).attr("src", "./images/icon-hamburger.svg");
    if (window.matchMedia("(min-width: 500px)").matches) {
      $(this).css("width", "50px");
    } else {
      $(this).css("width", "38px");
    }
    $(".collapsable-menu").animate({left: "100%", opacity: "0"}, 350, "swing", function() {
      $(".collapsable-menu").css("display", "none");
      $(".nav-item").removeClass("item-active");
      $(".nav-item").next().hide();
    });
  }
});

// change image attributes

if (window.matchMedia("(max-width: 1050px)").matches) {
  $("#main-1 .content img").attr("src", "./images/illustration-editor-mobile.svg")
  $("#main-3 .content img").attr("src", "./images/illustration-laptop-mobile.svg")
}
