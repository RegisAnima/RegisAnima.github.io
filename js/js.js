/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
});

$(".menu-button").click((function () {
    $(this).closest("body").toggleClass("active");
}));