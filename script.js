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
});

$(".ml9 .letters").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

anime.timeline({ loop: false }).add({
  targets: ".ml9 .letter",
  scale: [0, 1],
  duration: 1500,
  elasticity: 600,
  delay: function(el, i) {
    return 45 * (i + 1);
  }
});
