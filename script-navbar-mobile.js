const bodyMobile = document.querySelector('body');

const header = document.querySelector('.header');
const hide = document.querySelector('.hide-navbar-mobile');
let bottom = null;

function addLinks(href, rel) {
	const node = document.createElement('link');
	node.setAttribute('href', href);
	node.setAttribute('rel', rel);
	const head = document.querySelector('head').appendChild(node);

	return true
}

function openNavbarMobile() {
	const navbarMobile = document.querySelector('.navbar-mobile');
	
	navbarMobile.style.transform = 'translateX(0em)';
	bottom = document.createElement('div');
	bottom.setAttribute('onclick', 'closeNavbarMobile()');
	bottom.style.position = 'absolute';
	bottom.style.top = '0px';
	bottom.style.width = '100%';
	bottom.style.height = '100%';
	bottom.style.backgroundColor = 'rgba(0,0,0,0.2)';

	hide.appendChild(bottom)
}

function closeNavbarMobile() {
	const navbarMobile = document.querySelector('.navbar-mobile');

	navbarMobile.style.transform = 'translateX(-20em)';
	hide.removeChild(bottom);
	bottom = null;
	bottom.s
}

addLinks('https://fonts.googleapis.com/icon?family=Material+Icons', 'stylesheet')