let hero = $('.hero');
let header = $('.header');

$(window).scroll(function(){
    let scrollPos = $(window).scrollTop();
    
    if(scrollPos > hero.offset().top){
        $('.header').addClass('sticky');
    }else{
        $('.header').removeClass('sticky');
    }
});