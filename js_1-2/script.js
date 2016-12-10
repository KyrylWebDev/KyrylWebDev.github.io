window.onload = function() {

// FUNCTION POW REALIZATION 
function pow(y,n) {
	var res = y;
	for (var i = 1; i < n; i++) {
		var res = res * y;
	}
	return res;
}

var a = prompt('enter the basement!');
var b = prompt('enter the power!');
var c = pow(a,b);

alert('involution will be = ' + c); 


// NAME CHECKER
var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt("Enter the name of group");
}

console.log(arr);

var band = prompt("Enter your favorite band!");
var check;

for (var i = 0; i < 5; i++) {
	if (band === arr[i]) {
		check = "Nice band, dude!";
	}
	else {
		check = "Shit! Go out and listen smth good!";
	}
}

alert(check);

}
