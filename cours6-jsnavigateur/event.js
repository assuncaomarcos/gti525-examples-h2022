window.onload = function() {

    var btns = document.getElementsByTagName("SPAN");
    console.log(btns);

    var handler1 = function(event) {
        alert("hello");
        this.style["background-color"] = "#123456";
        console.log(event);
    }

    for (let i=0; i<btns.length; i++) {
        console.log(btns[i]);
        btns[i].addEventListener("click", handler1, false);
    }

}