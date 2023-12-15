const order_btn = $('.order__btn');

let inputs = $('.order-form__input, .order-selectTime__time:not(.order-selectTime__time--error)');

var calendar = new Calendar({
    id: "#color-calendar",
    calendarSize: "large",
    disableMonthYearPickers: true,
    disableMonthArrowClick: true,
});


/*select specialist*/
let specialists = $('.order-specialist');
specialists.click(function(e){
    let spec = $(e.currentTarget);


    specialists.each(function(){
        $(this).removeClass('active');
        spec.addClass('active');
    });
});


inputs.each(function(e){
    $(this).val(localStorage.getItem($(this).attr('name')));
});

inputs.on('input', function(e){
    localStorage.setItem($(e.currentTarget).attr('name'), $(e.currentTarget).val());
});


let currentParent;

$(window).resize(function(){
    if($(window).width() < 992){
        currentParent = order_btn.parent();
        order_btn.appendTo('.order-selectTime__inputs');
    }else{
        order_btn.appendTo(currentParent);
    }
});


order_btn.click(() => {
    let day = $('.calendar__day-selected .calendar__day-text').text();
    let time = $('.order-selectTime__time').val();
    let specialist = $('.order-specialist.active').attr('specialist_name');

    $.ajax({
        url: '../php/record.php',
        type: 'post',
        dataType: 'json',
        data: {
            name: $('.order-form__input--name').val(),
            tel: $('.order-form__input--tel').val(),
            message: $('.order-form__input--message').val(),
            specialist: specialist,
            day: day,
            time: time,
        },

        success: function(data){
            if(data.status == true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Вы успешно записаны! \r\n Ждем вашего прихода! ;)',
                    padding: '2em',
            
                    width: '100%',
                    color: '#000',
                    background: '#fff',
            
                    showConfirmButton: false,
                    timer: 10000,
        
                    toast: true,
                })
            }

            if(data.status == false){
                let input_error = $('.order-selectTime__time--error');
                let input_offer = $('.order-selectTime__offer');

                input_error.removeClass('hidden');
                input_error.text('Это время занято!\r\nМесто освободится в:');

                input_offer.text(data.offer_time);
                input_offer.removeClass('hidden');

                input_offer.click(function(){
                    input_error.addClass('hidden');
                    input_offer.addClass('hidden');
                    $('.order-selectTime__time').eq(0).removeClass('hidden');
                    $('.order-selectTime__time').eq(0).val($(this).text());
                });

                $('.order-selectTime__time').eq(0).addClass('hidden');

                var requiredText = input_error.text();
                input_error.on('input', function(){
                    if (String($(this).val()).indexOf(requiredText) == -1) {
                        $(this).val(requiredText);
                    }
                });

/*                 setTimeout(() =>{
                    $('.order-selectTime__time--error').replaceWith(`<input class="order-selectTime__time order__input" value="${localStorage.getItem('time')}" placeholder="Желаемое время">`);
                }, 100000); */
            }
        }
    });
});

