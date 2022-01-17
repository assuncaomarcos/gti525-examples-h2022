// Source: https://gist.github.com/rootulp/fb1cd6f09e02078717a9

var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var say = function(greeting){
    alert(greeting + ', ' + this.name);
};

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

var dispatch = function(person, method, args){
    // Invoke la fonction 'method' dans le contexte de l'objet 'person' (this va pointer vers 'person'), avec les  arguments 'args'	
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);
