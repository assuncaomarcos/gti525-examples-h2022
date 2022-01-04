console.log(":: functions ::");

function areaOfCircle(radius) {
    var PI = 3.1416;
    return PI * square(radius);
}

function square(x) {
    return x*x;
}

var A = areaOfCircle(2);
console.log("Aire d'un cercle de rayon 2 = " + A);

// ----------

function areaOfCircle2(radius) {
    var PI = 3.1416;
    
    function square(x) {
	    return x*x;
    }
    
    return PI * square(radius);
}

var B = areaOfCircle2(2);
console.log("Aire d'un cercle de rayon 2 = " + B);

// ----------

function areaOfCircle3(radius) {
    var PI = 3.1416;
    
    // This is a Nested function
    function piSquare(x) {
	    var sq = x * x;
	    return PI * sq;
    }
    
    return piSquare(radius);
}

var C = areaOfCircle3(2);
console.log("Aire d'un cercle de rayon 2 = " + C);