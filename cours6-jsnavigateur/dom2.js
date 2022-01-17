// Solution à l'activité en classe

const popup = function(name) {
	// faire un popup qui affiche "name" + event.target de l'événement

	return function(event) {
		let str1 = name;
		let str2 = event.target;
		alert(str1 + str2);
	};
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
