window.onload = function() {

var timerId, click = false;
var countMili = 0, count = 0, countMin = 0;
var stopper = document.getElementById("stop");

function start_click() {
	console.log("start");
	click = !click;
	for_message.innerHTML = "TIMER STARTED";
	document.getElementById("start").innerHTML = "PAUSE";
	document.body.style.backgroundColor = " #57b";

	if (click == true) {
		timerId = setInterval(function() {
			countMili++;
				if (countMili == 10) {
					count++;
					countMili = 0;
				}

  			if (count == 60) {
  				countMin++;
  				count = 0;
  			}
   		for_count.innerHTML = countMin + " min : " + count + " sec : 0" + countMili + " mili";
 		}, 100);
	}
	else
	{
		document.getElementById("start").innerHTML = "CONTINUE";
		document.body.style.backgroundColor = "rgb(139, 195, 74)";
		for_message.innerHTML = "PAUSED";
		clearInterval(timerId);
		countMin = countMin;
		count = count;
		for_count.innerHTML = countMin + " min : " + count + " sec : 0" + countMili + " mili";
	}
}


function stop_click() {
	console.log("stop");
	for_message.innerHTML = "TIMER IS READY";
	clearInterval(timerId);
	countMili = 0;
	countMin = 0;
	count = 0;
	for_count.innerHTML = countMin + " min : " + count + " sec : 0" + countMili + " mili";
}


start.addEventListener("click", start_click);
stopper.addEventListener("click", stop_click);


}
