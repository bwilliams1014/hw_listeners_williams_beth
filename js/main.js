


var clickMe = document.getElementsByTagName('h1')[0];

var count = 1;

clickMe.addEventListener('click', function() {
	var newParagraph = document.createElement('p');
	var newText = document.createTextNode("This is click number " + count)
//	newParagraph.innerHTML = '<p>This is click number </p>' + count;
	newParagraph.appendChild(newText)
	document.getElementsByTagName('body')[0].appendChild(newParagraph);
	count++;
})

function myFunction() {
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}