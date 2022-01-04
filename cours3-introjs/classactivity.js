console.log(":: classactivity.js ::");

function getRandomInt(min, max) {
    min = Math.ceil(min); max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    // Le maximum est exclusif et le minimum est inclusif
}

function randomArray(n, min, max) {
    var arr = [];
    for (var i=0; i<n; i++)
	arr.push(getRandomInt(min, max));
    return arr;
}

/* Note: tiré de
   https://khan4019.github.io/front-end-Interview-Questions/sort.html
   sortArray utilise l'algorithme Bubble Sort algorithm qui est O(n^2).
   La fonction va altérer le tableau original. Une copie devrait être faite
   si ce comportement n'est pas acceptable. */
function sortArray(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

// Code de test:
var arr = randomArray(10, 0, 50);
var sortedArr = sortArray(arr);
console.log(sortedArr);
