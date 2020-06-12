// скрол меню
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.fixed_menu').addClass('fixed');
	} else {
		$('.fixed_menu').removeClass('fixed');
	}
});
// слайдер
$('.why_are_we_carousel').slick({
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: "<img src='icons/arrow-left.png' class='prev' alt=''>",
    nextArrow: "<img src='icons/arrow-right.png' class='next' alt=''>",
	responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
$('.reviews_carousel').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 991,
		  settings: {
			dots: true,  
			arrows : false,
				 }
		}]
});
