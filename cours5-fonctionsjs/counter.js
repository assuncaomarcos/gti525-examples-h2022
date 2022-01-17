// Fonction Adder pour exemplifier les fermetures
function Adder(val) {
	var value = val;
	return function(inc) {
		value = value + inc;
		return value;
	}
};

var f = Adder(5);
console.log( f(3) );
console.log( f(5) );

var f2 = Adder(100);
console.log( f2(2) );
console.log( f2(3) );

console.log( f(1) );

// Fermeture Counter qui retourne un objet
function Counter(initial) {
	var val = initial;
	return {	
		increment : function() { val += 1; },
		reset: function() { val = initial; },
		get: function() { return val; }
	};
};

var f = Counter(5), g = Counter(10);
f.increment();
g.increment();
f.reset();
f.increment();
g.increment();
console.log( f.get() + "," + g.get() );

// Fermeture qui maintient un pointeur vers la fonction englobante
// Attention: cet exemple ne montre pas une bonne utilisation de
// la sauvegarde du pointeur "this" (dans la variable "that").
// De plus, l'utilisation de this et that est erronée ici.
function MultiCounter(initial) {
	let that = this;
	let val = [];
	console.log(this);
	this.init = function() {
		val = [];
		for (var i=0; i<initial.length; i++) {
			val.push(  initial[i] );
		};
	};
	this.init();
	return {
		increment: function(i) { val[i] += 1; },
		resetAll: function() { that.init(); },
		getValues: function() { return val; }
	};
};

// Version améliorée qui utilise le this/that correctement
// pour stocker une référence vers le "this" de l'objet externe
var MultiCounter2 = {

	create: function(initial) {

		let that = this;
		let val = [];
		console.log(this);
		this.init = function() {
			val = [];
			for (let i=0; i<initial.length; i++) {
				val.push(  initial[i] );
			};
		};
		this.init();
		return {
			increment: function(i) { val[i] += 1; },
			resetAll: function() { that.init(); },
			getValues: function() { return val; }
		};

	}
};

var m = MultiCounter( [1, 2, 3] );
//m = MultiCounter2.create( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.increment(0);
m.resetAll();
m.increment(1);
console.log( m );
console.log( m.getValues() );

// Cet exemple est erroné!
function MakeCounters2(n) {
	let counters = [];
	for (var i=0; i<n; i++) {
		let val = i;
		counters[i] = {
			increment: function() { val++; },
 			get: function() { return val; },
			reset: function() { val = i; }
		}
	}
	return counters;
};

// Cet exemple résoud le problème, mais ajoute des champs additionels à l'objet compteur
function MakeCounters1(n) {
	let counters = [];
	for (let i=0; i<n; i++) {
		counters[i] = {
			val : i,
			initial : i,
			increment: function() { this.val++; },
 			get: function() { return this.val; },
			reset: function() { this.val = this.initial; }
		}
	}
	return counters;
};

// Solution à l'exercice en classe qui corrige le défaut de la solution précédente
function MakeCounters(n) {
	let counters = [];
	for (let i = 0; i < n; i++) {
		counters[i] = function () {
			let initial = i, val = initial;
			return {
				increment: function () {
					val++;
				},
				get: function () {
					return val;
				},
				reset: function () {
					val = initial;
				}
			}
		}();	// Don't forget to call the function
	}
	return counters;
};

var m = MakeCounters(10);
for (let i = 0; i < 10; i++) {
	console.log(m[i]);
	console.log("Counter[ " + i + "] = " + m[i].get());
}

// Exemple d'une fonction d'ordre supérieur
var map = function( array, fn ) {
        // Applique fn à chaque élément de la liste, retourne une nouvelle liste
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let element = array[i];
		let args = [ element ];
		result.push( fn.apply(null, args) );
	}
	return result;
};

var l = [3, 1, 5, 7, 2];
console.log( map(l, function(num) { return num + 10; }) );

var add = function(a, b) {
	return a + b;
};

// Exemple de curryfication
var add10 = add.bind(null, 10);
console.log( map(l, add10) )