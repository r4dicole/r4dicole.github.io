document.ready(function() {
    //I don't know why, but my JQuery functions just won't work.

    $("#da").click(function() {
        $('html, body').animate({scrollTop:
            $("#about-section").offset().top}, 2000);
    });

});