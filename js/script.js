let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let back = document.querySelector('body');

burger.onclick = function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	back.classList.toggle('lock');
}

function clickLink() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	back.classList.toggle('lock');
}
