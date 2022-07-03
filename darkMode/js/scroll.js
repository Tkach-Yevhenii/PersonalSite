
$(function () {
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let elementOfSet = $(blockId).offset().top;
		console.log(elementOfSet)

		$("html, body").animate({
			scrollTop: elementOfSet - 65
		}, 700);
	});


	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('element-show');
			}
		});
	}

	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.main__item__services');
	let elementTwo = document.querySelectorAll('.main__item__prices');
	let elementThree = document.querySelectorAll('.main__item__reviews');
	let elementFour = document.querySelectorAll('.main-Two');

	for (let elm of elements) {
		observer.observe(elm);
	}

	for (let elm2 of elementTwo) {
		observer.observe(elm2);
	}

	for (let elm3 of elementThree) {
		observer.observe(elm3);
	};

	for (let elm4 of elementFour) {
		observer.observe(elm4);
	}

});

