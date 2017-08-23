window.addEventListener("load", countdown, false);

function countdown () 
{
	var now = new Date();
	var eventDate = new Date(2018, 5, 28);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remainderTime = eventTime - currentTime;

	var s = Math.floor(remainderTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	if (h < 10)
	{
		h = "0" + h;
	}

	if (m < 10)
	{
		m = "0" + m;
	}

	if (s < 10)
	{
		s = "0" + s;
	}

	document.getElementById("days").innerHTML = '<h1>' + d + '</h1>';
	document.getElementById("hours").innerHTML = '<h1>' + h + '</h1>';
	document.getElementById("minutes").innerHTML = '<h1>' + m + '</h1>';
	document.getElementById("seconds").innerHTML = '<h1>' + s + '</h1>';

	setTimeout(countdown, 1000);
}