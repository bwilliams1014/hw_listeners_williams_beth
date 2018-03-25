
var theClick = document.getElementById('theForm');
var theFirst = document.getElementById('firstName');
var theLast = document.getElementById('lastName');
var theEmail = document.getElementById('email');
var theMessage = document.getElementById('message')


theClick.addEventListener('submit', function(eventInfo) {
	eventInfo.preventDefault();
	console.log('The first name is: ');
	console.log('The last name is: ');
	console.log('The email is: ');
	console.log('The message is: ');

});

