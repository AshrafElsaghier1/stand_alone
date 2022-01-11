$(document).ready(function () {

// toggle menu bar 
var navList = $('.nav-list')
$('.menu-bar').on('click',function () {

	navList.addClass('open')

	if(navList.hasClass('open')){

		navList.animate({
			right:"0%"
		},500)

	}
})

$('.fa-times').on('click',function () {

	navList.animate({
		right:"-100%"
	},500,function () {
		navList.removeClass('open')	
	})

})

function navBar() {
	if($(window).scrollTop() > 40){

		$('.header').addClass('sticky')
	}else{

		$('.header').removeClass('sticky')

	}
}
navBar()	
$(window).scroll(function () {

	var wc = $(this).scrollTop();

		//add background to nav bar

		navBar()


// Fade In  Chevron Up *********

if( wc > 300){

	$('.fa-chevron-up').css('display','block')

}else{

	$('.fa-chevron-up').css('display','none')
}

if( wc > 500){
	$('.home-content').css('display','none')

}else{
	$('.home-content').css('display','block')

}

/* ******* CHANGING BACKGROUND POSITION ******** */
var positionX = $(window).scrollTop()/2
$('.home-contact-us,.our-solution,.parallax-bg').css({
	'background-position-x' :  -positionX + 'px' 
})

})

// ******* work-gallery shuffles ******** 

$('.selected-gallery li  a').on('click',function (e) {
	e.preventDefault();

	$('.selected-gallery li a').removeClass('active');
	$(this).addClass('active');

	const value = $(this).attr('data-custom')

	$('.work-image').hide()

	if( value == 'all'){

		$('.work-image').show()

	}else {

		$('.'+ value).fadeIn()

	}
	

})





// Fade In  Chevron Up *********
if( $(window).scrollTop() > 300){

	$('.fa-chevron-up').css('display','block')

}else{

	$('.fa-chevron-up').css('display','none')
}
		// home-content animation moving from bottom to up

		// chevron animation body moving from bottom to up

		$('.fa-chevron-up').on('click',function () {
			$('body,html').animate({
				scrollTop : '0'
			},600)

		});


		// chevron animation moving from bottom to up


		// chevron animation moving to features section

		$('.home-content .buttons .fa-chevron-down').on('click',function (e) {
			e.preventDefault()

			$('body,html').animate({
				scrollTop : $('.features').offset().top
			},500)
		})

		// chevron animation moving to our solution section

		$('.features .buttons .fa-chevron-down').on('click',function (e) {
			e.preventDefault()

			$('body,html').animate({
				scrollTop : $('.our-solution').offset().top
			},500)
		}) 

		// chevron animation moving to our work section

		$('.our-solution .buttons .fa-chevron-down').on('click',function (e) {
			e.preventDefault()

			$('body,html').animate({
				scrollTop : $('.our-work').offset().top
			},500)
		})
// ******************************** Work page js******************************************************************//

var placeHolder = $('input,textarea').attr('placeholder');
$('input,textarea').focus(function () {

	$(this).attr('placeholder','')
}).blur(function () {

	$(this).attr('placeholder',placeHolder)


})
// button contact scroll to contact-us section

$('.contact-us .buttons .btn').on('click',function (e) {
	e.preventDefault()

	$('body,html').animate({
		scrollTop : $('.contact-form').offset().top
	},1000)

})

$('.submit').on('click',function () {

	if ($(':required').val() === '' ){

		$(this).next('div').fadeIn().text('please fill all required form').delay(4000).fadeOut()
	}


})


// card Height auto 

var cardHeight = 0;
$('.card').each(function () {

	cardHeight	= $(this).height();

	$('.card').height(cardHeight);

})



})

if ($(window).scrollTop() > 400){
	$('.home-content').hide()
}else{

	$('.home-content').fadeIn()

}




AOS.init({ 
	once: true,
	
});





