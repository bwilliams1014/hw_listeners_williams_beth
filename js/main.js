// add paragraph below logo when logo image is clicked

var popUpParagraph = document.getElementById('logo');

popUpParagraph.addEventListener('click', function() {
	var newArticle = document.createElement('article');
	newArticle.innerHTML = '<article id="damage"><p>I was looking at a CT scan of one of the mass-shooting victims from Marjory Stoneman Douglas High School. <span class="emphasis">The organ looked like an overripe melon smashed by a sledgehammer,</span> and was bleeding extensively. How could a gunshot wound have caused this much damage?</p><a class=attribution href="https://www.theatlantic.com/politics/archive/2018/02/what-i-saw-treating-the-victims-from-parkland-should-change-the-debate-on-guns/553937/">Heather Sher in The Atlantic</a></article>';
		document.getElementById('second').appendChild(newArticle);
	});

// h1 text turns orange when moused over

var turnOrange = document.getElementsByTagName('h1')[0];

turnOrange.addEventListener('mouseover', function() {
	turnOrange.className = 'orange';
});

// h1 text reverts to original color when moused out

var turnBack = document.getElementsByTagName('h1')[0];

turnBack.addEventListener('mouseout', function() {
	turnBack.className = turnBack;
});

// add image above h2 when h2 text is clicked

var popUpImage = document.getElementsByTagName('h2')[0];

popUpImage.addEventListener('click', function() {
	var newImage = document.createElement('article');
	newImage.innerHTML = '<article><img src="img/march-for-our-lives-washington.jpg"></article>';
	document.getElementById('third').appendChild(newImage);
});

// add image above the logo when paragraph text is clicked

var popUpImage2 = document.getElementById('second');

popUpImage2.addEventListener('click', function() {
	var newImage2 = document.createElement('article');
	newImage2.innerHTML = '<article><img src="img/march-1.jpg"></article>';
	document.getElementById('first').appendChild(newImage2);
});
