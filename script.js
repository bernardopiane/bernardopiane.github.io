$(window).scroll(function() {
  if (!$("#presentation").visible(true)) {
    if ($("#nav").hasClass("navbar-top")) {
      $("#nav").toggleClass("navbar-top navbar-fixed");
    }
  } else {
    if ($("#nav").hasClass("navbar-fixed")) {
      $("#nav").toggleClass("navbar-fixed navbar-top");
    }
  }
});

$(function() {
  $("<img/>")
    .attr("src", "img/2.jpg")
    .on("load", function() {
      $(this).remove(); // prevent memory leaks as @benweet suggested
      $("#presentation").css(
        "background",
        "linear-gradient(rgba(80, 81, 104, 0.404),rgba(80, 81, 104, 0.404)),url('img/2.jpg')"
      );
      $("#presentation").css("background-size", "cover");
      $("#presentation").css("background-position", "center bottom");
      $("#loader").fadeOut("slow", function() {
        $("#loader").removeClass("d-flex");
      });
    });

  $("body").scrollspy({ target: "#list-example" });
  $("nav div ul li a[href^='#']").on("click", function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      300,
      function() {
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      }
    );
  });
  $("#goTo").click(function() {
    document.querySelector("#perfil").scrollIntoView({
      behavior: "smooth"
    });
  });
  preventLongPressMenu(document.getElementsByClassName('port-image'));
});

// $(".ml9 .letters").each(function() {
//   $(this).html(
//     $(this)
//       .text()
//       .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
//   );
// });

anime.timeline({ loop: false }).add({
  targets: ".ml9 .letter",
  scale: [0, 1],
  duration: 1500,
  elasticity: 600,
  delay: function(el, i) {
    return 45 * (i + 1);
  }
});

function absorbEvent_(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node) {
  node.ontouchstart = absorbEvent_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}