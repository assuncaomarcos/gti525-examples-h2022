/*
Cet exemple montre comment construire une hiérarchie d'objets au moyen des éléments de syntaxe ES6+. Bien que la syntaxe ressemble aux classes traditionnelles (ex., en Java), les concepts sous-jacents sont toujours basés sur le modèle prototypal de JavaScript.

Se référer aux notions théoriques décrites dans les acétates du cours.
*/

class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	area() {
		return 0;
    }
    toString() {
        return `x=${this.x}\ny=${this.y}`;
    }
}

class Circle extends Point {
    constructor(x,y,r) {
        super(x,y);
		this.r=r;
	}
	area() {
		return Math.PI*this.r*this.r;
    }
    toString() {
        return `${super.toString()}\nr=${this.r}`;
    }
}

class Ellipse extends Circle {
    constructor(x,y,r,r2) {
        super(x,y,r);
		this.r2=r2;
	}
	area() {
		return Math.PI*this.r*this.r2;
    }
    toString() {
        return `${super.toString()}\nr2=${this.r2}`;
    }
}
