const bar = document.getElementById('bar');
const slider = document.getElementById('slider');
const info = document.getElementById('p-info');
const body = document.querySelector('body');

// clique no container do slider
bar.addEventListener('mousedown', startSlide, false);

// permite soltar o slider mesmo com o cursor fora do container do slider
body.addEventListener('mouseup', stopSlide, false);

// primeiro click no container
function startSlide(event) {
	event.preventDefault();
	body.addEventListener('mousemove', moveSlide, false);
	setSlidePosition(event, event.target);
}

function moveSlide(event) {
	event.preventDefault();
	setSlidePosition(event, bar);
}

function stopSlide(event) {
	event.preventDefault();
	body.removeEventListener('mousemove', moveSlide, false);
    setSlidePosition(event, bar);
}

function getPosition(evento, bar) {
	return evento.clientX - bar.offsetLeft;
}

function setSlidePosition(event, bar) {
	let position = getPosition(event, bar);
	if (position < 0) {
		position = 0;
	} else if (position >= bar.offsetWidth) {
		position = bar.offsetWidth;
	}
	slider.style.width = position + 'px';
	setInfo(position);
}

function setInfo(position) {
	info.innerHTML = position + 'px';
}
