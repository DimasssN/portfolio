$(document).ready(function(){

    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        $("#mobile_menu, #menu_shadow").toggleClass("opened");
    });

    $("#menu_shadow").click(function(){
        $(".hamburger").removeClass("is-active");
        $("#mobile_menu, #menu_shadow").removeClass("opened");
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $("header").addClass("scrolled");
        }else{
            $("header").removeClass("scrolled");
        }
    });

});

