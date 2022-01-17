// Solution à l'activité en classe en utilisant timeout

let invokeTimes = function(func, noTimes, time) {
    console.log("Invocation: " + noTimes + " " + time);
    let count = 0;
    let timeoutHandler = function() {
		// timeOutHandler est une fermeture!
		console.log( "invocation " + count);
		func(count);
		count = count + 1;
		if (count < noTimes) {
			setTimeout(timeoutHandler, time);
		}
    };
    if (count==0) setTimeout(timeoutHandler, time);
};

const setup = function () {
    invokeTimes(function (i) {
        console.log("hello " + i);
    }, 10, 1000);
};

setup();
