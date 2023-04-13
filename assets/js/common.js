$(document).ready(function(){
    /* GNB movement */
    $(".gnb ul li").mouseenter(function(){
        $(".gnbdropwrap").fadeOut();
        if( $(".gnbdropwrap").eq($(this).index()).find(".ddzxc li").length > 0 ){
            $(".gnbdropwrap").eq($(this).index()).fadeIn();
        };
    });
    $(".gnbdropwrap").mouseleave(function(){
        $(".gnbdropwrap").slideUp('300');
    });
    $("#header").mouseenter(function(){
        $(".gnbdropwrap").hide();
    });

    /* banner _ swiper.js */
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
            delay: 3000
        }
    });
});