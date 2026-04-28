$(document).ready(function () {

    $(".about-block a").click(function (e) {
        e.preventDefault();
        let modal = $(this).attr("href");
        $(modal).fadeIn();
    });

    $(".close-btn").click(function (e) {
        e.preventDefault();
        $(".modal").fadeOut();
    });

    $(".modal").click(function (e) {
        if ($(e.target).hasClass("modal")) {
            $(".modal").fadeOut();
        }
    });

    $(".accordion-content").hide();

    $(".accordion-header").click(function () {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next(".accordion-content")).slideUp();
    });

    $("body").append('<button id="backToTop">↑ Top</button>');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

});