// Solution à l'activité en classe

const popup = function(name) {
	let foo = alert;
	return function(e) {
		console.log(this);
		foo(name + " : " + e.target);
	}
};

window.onload = function() {
	alert("Le document a fini de charger!");
	let setupBtn = document.getElementById("reset");
	let runBtn = document.getElementById("increment");
	let doneBtn = document.getElementById("done");
	setupBtn.addEventListener( "click", popup("setup"), false);
	runBtn.addEventListener( "click", popup("increment"), false);
	doneBtn.addEventListener( "click", popup("done"), false);
}
