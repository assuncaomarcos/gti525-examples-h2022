// Exemple de code démontrant la création d'objets au moyen de l'héritage prototypal

var Person = {
    print: function() {
	console.log("Person " + this.firstName + " " + this.lastName + " " + this.pronoun );
    }
};

var p = Object.create(Person);
p.firstName = "Linda";
p.lastName = "James";
p.pronoun = "She";

p.print();
console.log(p);
console.log( Object.getPrototypeOf(p) );
console.log( p.prototype );	

var e = Object.create(Person, {
    firstName: {value: "John"},
    lastName: {value: "Smith"},
    pronoun: {value: "He"}
});
e.title = "manager";
e.print = function() {
    console.log("Employee " + this.title);
    Person.print.call(this); 
};

e.print();
console.log(e);
console.log( Object.getPrototypeOf(e) );	
