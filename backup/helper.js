/*
    Ce fichier contient des fonctions auxiliaires
    pour aider le bon affichage des resultats des exemples.
 */

const writeLine = function (txt, type) {
    let tag = document.createElement("p");
    tag.innerText += `${txt}`;
    if (typeof type !== 'undefined') {
        tag.classList.add(type);
    }
    document.getElementById("div-results").appendChild(tag);
}

const writeAlert = function (txt) {
    writeLine(txt, "alert");
}


