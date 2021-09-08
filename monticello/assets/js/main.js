//nav menu
$(document).ready(function(){
    $(document).scroll(function(){
        if($(document).scrollTop() > 500){
            $('.navbar').addClass('fixed');
        }else{
            $('.navbar').removeClass('fixed');
        }
    });
    $(".hamburger").click(function(){
      $(".hamburger").toggleClass("is-active");
      $(".mobile_menu, .menu_shadow").toggleClass("opened");
  });

  $(".menu_shadow").click(function(){
      $(".hamburger").removeClass("is-active");
      $(".mobile_menu, .menu_shadow").removeClass("opened");
  });
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main_menu").style.top = "0";
  } else {
    document.getElementById("main_menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
//header swiper
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.scrollDown'
    },
  });
//scroll link in header
  $(function() {
    $('a[href^="#A"]').click(function(e) {
      e.preventDefault();
      let link_anchor = $(this).attr("href"),
          anchor = $(link_anchor).offset().top;
      $('html, body').animate({
        scrollTop: anchor
      }, 500);
    });
    let button = $('#button-up');	
      $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
          button.fadeIn();
        } else {
            button.fadeOut();
          }
      });	 
      button.click(function(){
        $('body, html').animate({
          scrollTop: 0
        }, 800);
      return false;
      });	
  });
//news slider
  $(document).ready(function() {
    let slider = $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
      //  slideMargin: 15,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 1000,
 
        keyPress: true,
        controls: false,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
            {
                breakpoint:1024,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:30,
                  }
            },
            {
                breakpoint:850,
                settings: {
                    item:1,
                    slideMove:1,
                    autoWidth: true,
                    slideMargin:15,
                  }
            }]
    });
    $('.prev').click(()=>{
      slider.goToPrevSlide();
    });
    $('.next').click(()=>{
      slider.goToNextSlide();
    });
});

// gallery
$(document).ready(function() {
    $("#lightgallery").lightGallery({
        selector: '.item',
        download: false,
        width: '100%'
    }); 
});

  //map

let map;
function initMap(){
    document.getElementById('map_img').remove();
    document.getElementById('map_link').remove();


const map = L.map('map').setView([40.663382442278674, -73.90224307468691], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.663382442278674, -73.90224307468691]).addTo(map)
    .bindPopup('We are here!')
    .openPopup();
};