// Autre solution à l'activité en classe
// Utilisation de fermetures imbriquées pour préserver l'état

let invokeTimes = function(func, noTimes, time) {
    console.log("Invocation: " + noTimes + " " + time);
    
    for (let i = 0; i < noTimes; ++i) {
		let timeoutHandler = function(count) {
	    // timeOutHandler is a closure
	    return function() {
			console.log( "invocation " + count);
			func(count);
	    }
	}
	setTimeout(timeoutHandler(i), time * i);
    }
};

const setup = function () {
	invokeTimes(function (i) {
		console.log("hello " + i);
	}, 10, 1000);
};

setup();
