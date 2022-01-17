let x = 0;
console.log("Code est exécuté immédiatement | x=" + x);

// Sera exécuté plus tard, dans 1s
setTimeout(function () {
    x++;
    console.log("Code est exécuté après 1 s. | x=" + x);

    setTimeout(function () {

        x++;
        console.log("Code est exécuté après 1+1 s. x=" + x);

    }, 1000)

}, 1000);

console.log("x=" + x);