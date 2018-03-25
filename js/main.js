// paragraph is added to document when image is clicked

var popUpParagraph = document.getElementById('logo');

popUpParagraph.addEventListener('click', function() {
	var newArticle = document.createElement('article');
	newArticle.innerHTML = '<article id="damage"><p>In a typical handgun injury, which I diagnose almost daily, a bullet leaves a laceration through an organ such as the liver. To a radiologist, it appears as a linear, thin, gray bullet track through the organ. There may be bleeding and some bullet fragments.</p><p>I was looking at a CT scan of one of the mass-shooting victims from Marjory Stoneman Douglas High School. <span class="emphasis">The organ looked like an overripe melon smashed by a sledgehammer,</span> and was bleeding extensively. How could a gunshot wound have caused this much damage?</p><p>One of the trauma surgeons opened a young victim in the operating room, and found <span class="emphasis">only shreds of the organ</span> that had been hit by a bullet from an AR-15, a semiautomatic rifle that delivers a devastatingly lethal, high-velocity bullet to the victim. Nothing was left to repair—and utterly, devastatingly, nothing could be done to fix the problem. The injury was fatal.</p><p>As a doctor, I feel I have a duty to inform the public of what I have learned as I have observed these wounds and cared for these patients. <span class="emphasis"> It’s clear to me that AR-15 and other high-velocity weapons, especially when outfitted with a high-capacity magazine, have no place in a civilian’s gun cabinet.</span></p><a class=attribution href="https://www.theatlantic.com/politics/archive/2018/02/what-i-saw-treating-the-victims-from-parkland-should-change-the-debate-on-guns/553937/">Heather Sher in The Atlantic</a></article>';
		document.getElementsByTagName('article')[0].appendChild(newArticle);
	});

// headline text turns red when moused over

var turnOrange = document.getElementsByTagName('h1')[0];

turnOrange.addEventListener('mouseover', function() {
	turnOrange.className = 'orange';
});

// headline text reverts to original color when moused out

var turnBack = document.getElementsByTagName('h1')[0];

turnBack.addEventListener('mouseout', function() {
	turnBack.className = turnBack;
});

//var popUpImage = document.getElementById('logo');

//popUpImage.addEventListener('mouseover', function() {
//	var newImage = document.createElement('img');
//	newImage.innerHTML = '<img src="img/march-for-our-lives-washington.jpg"><p> huh </p>';
//});