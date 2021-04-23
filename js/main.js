
/*
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.header').fadeOut(1000);
		} else {
			$('.header').fadeIn(1000);
		}
	});
});


$(document).ready(function () {
	$(window).bind('scroll', function () {
		var distance = 50;
		if ($(window).scrollTop() > distance) {
			$('.header').fadeOut(500);
		}
		else {
			$('.header').fadeIn(500);
		}
	});
});
*/

$(document).ready(function () {
	var header = $('.header'),
		scrollPrev = 0;

	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}
		scrollPrev = scrolled;
	});
});


let bg = document.querySelector('.parallax-image');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

let bgSlow = document.querySelector('.slow');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bgSlow.style.transform = 'translate(' + x * 8 + 'px, ' + y * 8 + 'px)';
});

let bgRegular = document.querySelector('.regular');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bgRegular.style.transform = 'translate(' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bgFast = document.querySelector('.fast');
window.addEventListener('mousemove', function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bgFast.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});