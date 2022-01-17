// Solution à l'activité en classe pour la fonction filter
// Solution to the class activity for the filter function is below;
var filter = function (array, test) {
    let result = [];
    for (let element of array) {
        if (test(element)) result.push(element);
    }
    return result;
};

var lessThan = function (a, b) {
    return (a < b) ? true : false;
}
var greaterThan5 = lessThan.bind(null, 5);

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
var c = filter(a, greaterThan5);
console.log(c);

// Solution à l'activité en classe pour la fonction divisibleBy + isEven + filter
var divisibleBy = (d, x) => x % d === 0;
var isEven = divisibleBy.bind(null, 2);

console.log(divisibleBy(2, 10));
console.log(divisibleBy(2,3));

console.log(isEven(10));
console.log(isEven(3));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven));