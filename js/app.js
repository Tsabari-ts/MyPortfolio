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

        var checkInterval = 60000;
    var intervalId = setInterval(remind, checkInterval);

    function remind() {
        var currentTime = new Date();
        var reminderTime = new Date("2023-06-30T17:20:00");

        if (currentTime >= reminderTime) {
            callBot();
            console.log("Reminder: It's time!");

            clearInterval(intervalId);
        }
    }

    function callBot() {
        var message = "שבת שלום";
        let token = "6191346597:AAEpNzN-CmVfzh2ami_yQBIbgPXiwe1mPnc";
        let chat_id = -937916253;

        let url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chat_id + "&text=" + message;

        $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                console.log("Response:", response);
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
            }
        });
    }
});
