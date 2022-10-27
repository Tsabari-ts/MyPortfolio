$(document).ready(function () {
    $("#mainLink").hide();

    $("#mainMenu").click(function () {
        $("#mainLink").slideToggle();
        //$("#mainNav").addClass("on-scroll");

    //    if ($("#mainMenu").click(function)) {
    //    $("#mainNav").addClass("on-scroll");
    //}
    //else {
    //    $("#mainNav").removeClass("on-scroll");
    //}

        //$("#mainLink li a").click(function () {
        //    $("#mainLink").slideUp();
        //});

        //$("#mainNav").addClass("on-scroll");
    });

    //if ($(window).scrollTop()) {
    //    $("#mainNav").addClass("on-scroll");
    //}
    //else {
    //    $("#mainNav").removeClass("on-scroll");
    //}



    //$(window).on("scroll", function () {
        //$("#mainNav").fadeIn();
        //if ($(window).scrollTop()) {
        //    $("#mainNav").addClass("on-scroll").fadeIn(100);
        //}
        //else {
        //    $("#mainNav").removeClass("on-scroll").fadeOut(100);
        //}
    //});
});