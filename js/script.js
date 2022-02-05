$(document).scroll(function() {
    if($(window).scrollTop() > 50){

     $(".navigation").css("background-color","white");
     $(".navigation > *").css("color", "sienna");
     $(".main-nav > a:link, .main-nav > a:visited").css("color", "sienna");
     

    }else if($(window).scrollTop() < 50){

        $(".navigation").css("background-color","transparent");
        $(".navigation > *").css("color", "rgba(255, 255, 255, .7)");
        $(".main-nav > a:link, .main-nav > a:visited").css("color", "rgba(255, 255, 255, .7)");

    }
});