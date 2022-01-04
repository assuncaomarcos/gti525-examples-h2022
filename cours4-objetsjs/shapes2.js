/*
Cet exemple en tant que tel n'est pas directement matière à examen. Toutefois, je vous suggère de l'analyser puisque les concepts auxquels il réfère le sont.

Il est fourni à titre informatif pour illustrer une technique pour réaliser l'héritage prototypal au moyen d'une hiérarchie d'objets créée avec Object.create (une hiérarchie semblable à shapes.js est créée).

Fonctionnement:
- Nous modélisons chacun des trois objets, puis nous établissons la hiérarchie avec l'enchaînement des [[Prototypes]] via l'appel à Object.create
- Remarquez qu'il n'y a aucune fonction constructeur -- les [[Prototypes]] sont donc enchaînés directement, et ne sont pas liés au champ "prototype" du constructeur
- La création d'une "instance" d'un des trois objets se fait également via l'appel à Object.create: nous créons un nouvel objet, et son [[Prototype]] est lié au [[Prototype]] de l'objet Point/Circle/Ellipse.
- Puisqu'aucun constructeur n'est invoqué lors de la création d'objets avec Object.create, nous implémentons une fonction init dans chacun des objets, qui permet d'initialiser les paramètres. L'utilisateur doit donc manuellement invoquer init après avoir créé l'objet. Vous pouvez imaginer comme analogie l'initialisation d'une "structure" en C++ vs une classe.
*/

var Point = {
    init: function(x, y) {
	this.x = x;
	this.y = y;
    },
    area : function() {
	return 0;
    },
    toString: function() {
	return "(" + this.x + "," + this.y + ")";
    }
}; 


var Circle = Object.create(Point);
Circle.init = function(x, y, r) {
	Point.init.call(this, x, y);
	this.r = r;
};
Circle.area = function () {
	return 3.14 * this.r * this.r;
};	
Circle.toString =  function() {
	return "(" + this.x + "," + this.y + ", " + this.r + ")";
};

var Ellipse = Object.create(Circle);
Ellipse.init = function(x, y, r, r2) {
	Circle.init.call(this, x, y, r);
	this.r2 = r2;
};	
Ellipse.area = function() { 
	return 3.14 * this.r * this.r2;
};	
Ellipse.toString = function() {
	return "(" + this.x + "," + this.y + ", " + this.r + " , " + this.r2 + ")";
};

var p = Object.create(Point);
p.init(10, 20);
document.writeln( "Point p = " + p );
document.writeln( "p's area = " + p.area() );
console.log( Object.getPrototypeOf(p) );

var c = Object.create(Circle);
c.init(20, 30, 5);
document.writeln( "Circle c = " + c );
document.writeln( "c's area = " + c.area() );
console.log( Object.getPrototypeOf(c) );

var e = Object.create(Ellipse);
e.init(5, 10, 5, 2);
document.writeln( "Ellipse e = " + e );
document.writeln( "e's area = " + e.area() );
console.log( Object.getPrototypeOf(e) ); 
console.log( Object.getPrototypeOf( Object.getPrototypeOf(e) ) );

var e2 = Object.create(Ellipse);
e2.init(0, 0, 0, 0); 
document.writeln( "Ellipse e = " + e );
document.writeln( "Ellipse e2 = " + e2 );
console.log( Object.getPrototypeOf(e2) ); 
console.log( Object.getPrototypeOf( Object.getPrototypeOf(e2) ) );

function iterateOverProperties(obj) {
	var e; var str = "{ ";
	var proto = Object.getPrototypeOf(obj);
	console.log(proto);
	for (e in obj) {
		if ( ( obj.hasOwnProperty(e) ) 
		  && ( typeof(obj[e]) != "function") 
		  && (e in proto ) ) {
				str = str + e + " = " + obj[e] + " , ";
		} 
	}
	str = str + " } ";
	return str;
}

console.log( "p's properties " + iterateOverProperties(p) );
console.log( "c's properties " + iterateOverProperties(c) );
console.log( "e's properties " + iterateOverProperties(e) );
