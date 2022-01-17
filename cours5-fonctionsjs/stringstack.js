// Considérez le code suivant qui modélise une pile en JavaScript qui n'accepte que les valeurs étant des chaînes de caractères:

function StringStack() {
    this.values = [];
}
StringStack.prototype.push = function(val) {
    if (typeof val == "string")
	this.values.push(val);
}
StringStack.prototype.pop = function() {
    return this.values.pop();
}

// Le problème avec cette implémentation est qu'elle donne accès à l'attribut privé values. Par exemple:

var myStack = new StringStack();
myStack.push("str1"); myStack.push("str2");
myStack.pop(); // retourne "str2"
var vals = myStack.values; // vals contient [tr1]

// Comment pourriez-vous réécrire le code StringStack afin que l'attribut privé values soit encapsulé, c'est-à-dire inaccessible de l'extérieur? Vous devez utiliser les fermetures comme nous avons vu en classe. Votre code devrait être compatible avec l'invocation suivante:

var myStack = StringStack(); // pas de new ici
myStack.push("str1"); myStack.push("str2");
myStack.pop(); // retourne "str2"
var vals = myStack.values; // vals est undefined: puisque cet attribut n'est pas accessible de l'extérieur

// Solution:

function StringStack() {
    var values = [];
    
    return {
	push: function(val) {
	    if (typeof val == "string")
		values.push(val);
	},
	pop: function() {
	    return values.pop();
	}
    }
}
