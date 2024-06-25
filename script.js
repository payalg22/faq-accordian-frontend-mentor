
$(document).ready(function () {
    $(".ans-toggle").click(function () {
        let ansSection = $(this).parent().next();
        $(this).children().toggleClass("open-ans");
        $(this).children().toggleClass("close-ans");

        ansSection.slideToggle();

    });
})
