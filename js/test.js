$(function() {

$(window).scroll(function() {

var _height = $(document).scrollTop();

//導航

if(_height > 100) {

$('.js_header').css({

'position': 'fixed',

'top': '0',

'right': '0',

'left': '0'

})

} else {

$('.js_header').css({

'position': 'relative',

'top': '0',

'right': '0',

'left': '0'

})

}

ADDCALSS(_height, '.work', 0);

ADDCALSS(_height, '.about', 1);

ADDCALSS(_height, '.skills', 2);

ADDCALSS(_height, '.education', 3);

ADDCALSS(_height, '.experience', 4);

ADDCALSS(_height, '.contact', 5);

});

function ADDCALSS(_height, _classsName, _index) {

var _serviceH = $(_classsName).offset().top;

if(_height > _serviceH-60) {

$('.js_menu a').removeClass("active");

$('.js_menu a').eq(_index).addClass("active");

}

}

$('.js_menu a').on('click', function(event) {

event.preventDefault();//阻止默認行為

$('html,body').animate({

scrollTop: $("#" + this.href.split("#")[1]).offset().top

}, 600);

$('.js_menu a').removeClass('active');

$(this).addClass('active');

});

})
