function svgToBase64Url(svgString, width, height) {
    const base64SVG = btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}px" height="${height}px">${svgString}</svg>`);
    return `url('data:image/svg+xml;base64,${base64SVG}')`;
}

$('.hero-circle').css('cursor', `${svgToBase64Url(`<circle cx="30" cy="30" r="30" fill='rgba(0,0,0,0.8)'/>`, 100, 100)}, auto`);



/* let text = $('.logo__name');
let text_clone = text.clone();

text_clone.appendTo($('.hero'));
text_clone.addClass('cl');

setOffset();

function setOffset(){
    let text_offset = text.offset();
    text_clone.offset({ top: text_offset.top, left: text_offset.left});
}

$(window).resize(function(){
    setOffset();
});

$(window).scroll(function(){
    setOffset();
});

 */







var device;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    device = 'mobile';
}else{
    device = 'pc';
}



if(device == 'pc') mouseWheelPc();
else mouseWheelMobile();




let direction = null;


function mouseWheelMobile() {
    let event = null;

    $('.hero-circle').bind('touchstart DOMMouseScroll', function (e) { return false; });
    $('.hero-circle').bind('touchmove DOMMouseScroll', function (e) { return false; });
    $('.hero-circle').bind('touched DOMMouseScroll', function (e) { return false; });


    $('.hero-circle').on('touchstart', function (e) {
        event = e;
    });


    $('.hero-circle').on('touchmove', function (e) {
        if (event) {
            direction = e.touches[0].pageX - event.touches[0].pageX < 0 ? 'up' : 'down';
            set_progress();
        }
    });


    $('.hero-circle').on('touched', function (e) {
        event = null;
    });
}


function mouseWheelPc() {
    $('.hero-circle').bind('mousewheel DOMMouseScroll', function (e) { return false; });
    $('.hero-circle').bind('mousewheel', function(e){
        direction = e.originalEvent.deltaY > 0 ? 'down' : 'up';

        set_progress();
    });
}



let progress = $('.hero-circle__progress circle');
let progress__array = progress[0].getTotalLength();
progress.css('--hero-progress_array', progress__array);

const border_start_point = 0;
const border_end_point = progress__array;

let border_del = device == 'mobile' ? border_end_point / 10 : border_end_point / 3;
let border_offset = 0;

let indexSlide = 0;
let maxIndexSlide = $('.hero-circle').length - 1;
let minIndexSlide = 0;

if (localStorage.getItem('clue') == 'none') {
    $('.clue').each(function () {
        $(this).addClass('hidden');
    });
}

function set_progress(){
    if (localStorage.getItem('clue') != 'none') {
        setTimeout(() => {
            $('.clue').remove();
            localStorage.setItem('clue', 'none');
        }, 3000);
    }



    if (direction == 'down') {
        border_offset = border_offset + border_del;
        if (border_offset > border_end_point) {
            border_offset = border_end_point;

            indexSlide++;
            if (indexSlide > maxIndexSlide) indexSlide = maxIndexSlide;
            setSlide();
        }




    } else if (direction == 'up') {
        border_offset = border_offset - border_del;
        if (border_offset < border_start_point) {
            border_offset = border_start_point;

            indexSlide++;
            if (indexSlide > minIndexSlide) indexSlide = minIndexSlide;
            setSlide();
        }
    }

    progress.css('--hero-progress_offset', border_offset);
}



function setSlide() {
    $.each($('.hero-circle'), function () {
        $(this).removeClass('visible');
    });

    $('.hero-circle').eq(indexSlide).addClass('visible');
    $('.hero').attr('theme', indexSlide);

    $('.hero__icon').removeClass('visible');
    $(`.hero__icon[indexSlide=${indexSlide}]`).addClass('visible')
}