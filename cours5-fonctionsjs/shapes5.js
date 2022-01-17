// Exemples de code -- fonctions et prototypes

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function (point) {
		return Math.sqrt((this.x - point.x) * (this.x - point.x)
			+ (this.y - point.y) * (this.y - point.y));
	};
	return 0;
};

Point.prototype.toString = function () {
	return "(" + this.x + "," + this.y + ")";
};

Point.new = function () {
	let newObj = Object.create(this.prototype);
	console.log(this.prototype);
	this.apply(newObj, arguments);
	return newObj;
};

var add = function (p1, p2) {
	return new Point(p1.x + p2.x, p1.y + p2.y);
};

var add2 = function(p1, p2) {
	var res = Object.create(this);
	res.x = p1.x + p2.x;
	res.y = p1.y + p2.y;
	return res;
};

var addAll = function () {
	let p = Object.create(this);
	p.x = 0;
	p.y = 0;
	for (let i = 0; i < arguments.length; i++) {
		let point = arguments[i];
		if (Object.getPrototypeOf(point) != this) {
			throw {
				name: TypeError,
				message: "Object " + point + " n'est pas du type Point",
				result: p
			};
		}
		p.x += point.x;
		p.y += point.y;
	}
	return p
};

let p1 = new Point(2, 3);
let p2 = new Point(5, 7);
console.log(Object.getPrototypeOf(p1) == Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(p1).constructor);

// Utilisation de Point.new au lieu du constructeur
p1 = Point.new(2, 3);
p2 = Point.new(5, 7);
console.log(p1);
console.log(p2);
console.log(Object.getPrototypeOf(p1) == Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(p1).constructor);

console.log( "Distance entre p1 et p2 = " + p1.dist(p2) );
let res1 = add(p1, p2);
console.log(res1);
console.log( "Add p1 and p2 = res1 =  " + res1 );

let points = [ p1, p2 ];
let res2 = add2.apply( Object.getPrototypeOf(p1), points);
console.log(res2);
console.log("Add2 of p1 and p2 = res2 = " + res2);

let res3 = add2.call( Object.getPrototypeOf(p1), p1, p2 );
console.log(res3);
console.log("Add2 of p1 and p2 = res3 = " + res3);

let res4 = addAll.call( Object.getPrototypeOf(p1), p1, p2, res1, res2, res3);
console.log(res4);
console.log("AddAll of p1,p2, res1, res2 and res3 = res4 = " + res4);

var res5;
try {
	res5 = addAll.call( Object.getPrototypeOf(p1), p1, p2, "notapoint", res2, res3);
} catch (e) {
	console.log(e.name + " : " + e.message);
	res5 = e.result;
};
console.log(res5);
console.log("AddAll of p1,p2, res1, res2 and res3 = res5 = " + res5);

res4 = addAll.call( Object.getPrototypeOf(p1), p1, p2, res1, res2, res3);
console.log(res4);
console.log("AddAll of p1,p2, res1, res2 and res3 = res4 = " + res4);

try {
	res5 = addAll.call( Object.getPrototypeOf(p1), p1, p2, "notapoint", res2, res3);
} catch (e) {
	console.log(e.name + " : " + e.message);
	res5 = e.result;
};
console.log(res5);
console.log("AddAll of p1,p2, res1, res2 and res3 = res5 = " + res5);

