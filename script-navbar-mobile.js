var bodyMobile = document.querySelector('body')
var navbarMobile = document.querySelector('.navbar-mobile')
var header = document.querySelector('.header')
var hide = document.querySelector('.hide-navbar-mobile')
var bottom = null

function openNavbarMobile() {
	navbarMobile.style.transform = 'translateX(0em)'
	bottom = document.createElement('div')
	bottom.setAttribute('onclick', 'closeNavbarMobile()')
	bottom.style.position = 'absolute'
	bottom.style.top = '0px'
	bottom.style.width = '100%'
	bottom.style.height = '100%'
	bottom.style.backgroundColor = 'rgba(0,0,0,0.2)'

	hide.appendChild(bottom)
}

function closeNavbarMobile() {
	navbarMobile.style.transform = 'translateX(-20em)'
	hide.removeChild(bottom)
	bottom = null
}