var headerCallMe = document.getElementById('header_call-me');
var overlay = document.getElementById('overlay');
var closePopup = document.getElementById('popup__close');

function openOverlay() {
	overlay.style.display = 'flex';
}

function closeOverlay(){
	overlay.style.display = 'none';
}


headerCallMe.addEventListener("click", openOverlay);
closePopup.addEventListener("click", closeOverlay);
