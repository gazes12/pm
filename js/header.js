let services = $('.services');
let header = $('.header');

$(window).scroll(function(){
    let scrollPos = $(window).scrollTop();
    
    if(scrollPos > services.offset().top){
        $('.header').addClass('sticky');
    }else{
        $('.header').removeClass('sticky');
    }
});