


var clickMe = document.getElementsByTagName('h1')[0];

var count = 1;

clickMe.addEventListener('click', function() {
	var newParagraph = document.createElement('p');
	newParagraph.innerHTML = '<p>This is click number </p>' + count;
	document.getElementsByTagName('body')[0].appendChild(newParagraph);
	count++;
})