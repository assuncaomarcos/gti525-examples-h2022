let userName;
let xhr = new XMLHttpRequest();
xhr.open("GET", "/API");
setTimeout( () => {
    xhr.onload = function() {
        if (xhr.status==200) {
            var parsedData = JSON.parse(xhr.responseText);
            userName = parsedData.User.Name;

            setTimeout( () => {
                document.getElementById("username").childNodes[0].nodeValue = userName;
            }, 5000);
        }
    };
}, 3000);

// Se pourrait-il que la réponse soit obtenue très rapidement
// et que userName contienne la réponse lorsque la ligne 10 exécute?