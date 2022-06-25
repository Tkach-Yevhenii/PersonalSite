$(document).ready(function () {
	$('.header__menu__burger').click(function() {
		$('.header__menu__burger, .header__menu__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



	$("data-scroll").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		console.log(111)
	});
});


