
var menu = false;
function changeMenu() {
	menu = !menu;
}

function addLinks(href, rel) {
	var node = document.createElement('link');
	node.setAttribute('href', href);
	node.setAttribute('rel', rel);
	var head = document.querySelector('head').appendChild(node);

}

function menuAction() {
	
	switch (menu) {
		case false: 
			openMenu()
			break;
		case true:
			closeMenu()
			break;
	}
	changeMenu()
}
		
function openMenu() {
	var menu = document.querySelector('.menu-hm');
	menu.classList.remove('menu-close-hm');

	var iconDiv = document.querySelector('.menu-icondiv-hm');
	iconDiv.classList.add('menu-icondiv-close-hm');

	iconDiv.style.borderRadius = '100%'

	var icon = document.querySelector('.menu-icon-hm');

	icon.innerText = 'close';
}

function closeMenu() {
	var menu = document.querySelector('.menu-hm').classList.add('menu-close-hm');
	
	var iconDiv = document.querySelector('.menu-icondiv-hm');
	iconDiv.classList.remove('menu-icondiv-close-hm');

	iconDiv.style.borderRadius = '0.3rem'

	var icon = document.querySelector('.menu-icon-hm');

	icon.innerHTML = 'menu';
}
