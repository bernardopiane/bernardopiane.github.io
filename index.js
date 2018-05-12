// function SetNavTop() {
//     $('.navbar').hide().removeClass("fixed-bottom").addClass("fixed-top").show();
// }

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        $(".section").addClass("fixScroll");
    } else {
        navbar.classList.remove("sticky");
        $(".section").removeClass("fixScroll");
    }
}

$("#homeLink").click(function () {
    $('html, body').animate({
        scrollTop: $("#greeting").offset().top
    }, 500);
});

$("#portLink").click(function () {
    $('html, body').animate({
        scrollTop: $("#port").offset().top
    }, 500);
});

$("#aboutLink").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function () {
    $(function () {
        $('[data-toggle="popover"]').popover()
    });
});