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
	let position = getPosition(event, bar);
	body.addEventListener('mousemove', moveSlide, false);
	slider.style.width = position + 'px';
}

function moveSlide(event) {
	event.preventDefault();
	let position = getPosition(event, bar);
	if (position < 0) {
		info.innerHTML = 'moving : 0%';
		slider.style.width = '0px';
	} else if (position >= bar.offsetWidth) {
		info.innerHTML = 'moving : 100%';
		slider.style.width = bar.offsetWidth + 'px';
	} else {
		info.innerHTML = 'moving : ' + position + 'px';
		slider.style.width = position + 'px';
	}
}

function stopSlide(event) {
	event.preventDefault();
	let position = getPosition(event, bar);

	body.removeEventListener('mousemove', moveSlide, false);
	if (position < 0) {
		info.innerHTML = 'moving : 0%';
		slider.style.width = '0%';
	} else if (position >= bar.offsetWidth) {
		info.innerHTML = bar.offsetWidth + 'px';
		slider.style.width = '100%';
	} else {
		slider.style.width = position + 'px';
	}
}

function getPosition(evento, bar) {
	return evento.clientX - bar.offsetLeft;
}
