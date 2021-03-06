// 2. Si vous souhaitez inhiber la propagation des événements dans la phase bubble après div3, comment pourriez-vous le faire?

const bubbleHandler = function(name) {
	return function(e) {
	    console.log("Bubble handle invoked on : " + name);
		console.log("Event target " + e.target);
		if (name == "div3") {
			e.stopImmediatePropagation();
		}
	};
};

const bubbleHandler2 = function(name) {
	return function(e) {
	    console.log("Bubble handler2 invoked on : " + name);
		console.log("Event target " + e.target);
	};
};

const captureHandler = function(name) {
	return function(e) {
	    console.log("Capture handle invoked on : " + name);
	    console.log("Event target " + e.target);
	};
	
}

window.onload = function() {
	let div1 = document.getElementById("one");
	let div2 = document.getElementById("two");
	let div3 = document.getElementById("three");
	let div4 = document.getElementById("four");
	let btn = document.getElementById("btn");

	div1.addEventListener("click", bubbleHandler("div1"), false);
	div2.addEventListener("click", bubbleHandler("div2"), false);
	div3.addEventListener("click", bubbleHandler("div3"), false);
	div3.addEventListener("click", bubbleHandler2("div3"), false);
	div4.addEventListener("click", bubbleHandler("div4"), false);
	btn.addEventListener("click", bubbleHandler("btn"), false); // TARGET

	div1.addEventListener("click", captureHandler("div1"), true);
	div2.addEventListener("click", captureHandler("div2"), true);
	div3.addEventListener("click", captureHandler("div3"), true);
	div4.addEventListener("click", captureHandler("div4"), true);
	btn.addEventListener("click", captureHandler("btn"), true);  // TARGET
};

// Capture: div1, div2, div3, div4, btn
// Bubble: btn, div4, div3, div2, div1