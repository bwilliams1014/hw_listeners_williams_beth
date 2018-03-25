
var theClick = document.getElementById('theForm');

theClick.addEventListener('submit', function(eventInfo) {
	eventInfo.preventDefault();
	var theFirst = document.getElementById('firstName').value;
	console.log('The first name is: ' + theFirst);
	var theLast = document.getElementById('lastName').value;
	console.log('The last name is: ' + theLast);
	var theEmail = document.getElementById('email').value;
	console.log('The email is: ' + theEmail);
	var theMessage = document.getElementById('message').value;
	console.log('The message is: ' + theMessage);

});

