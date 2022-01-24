function cell_log(...args) {
    let elem = document.createElement("p");
    elem.innerHTML = args.join();
    document.querySelector('#output-area').appendChild(elem);
}
/*
{
    let div = document.createElement("div");
    div.setAttribute("style",`width:500px; height: 40px; 
                background-color: black; display: flex; color: white; 
                padding : 0px`);

    div.innerHTML = `<strong>
            <p style="margin : 10px; padding : 0px; font-weight: bold; 
            font-size: 20px;">Console :</p></strong>`;
    document.querySelector('#output-area').appendChild(div);

    // Pour intercepter les appels à console.log()
    // et faire une copie sur la cellule de résultat
    const log = console.log.bind(console)
    console.log = (...args) => {
        log(...args);
        cell_log(...args);
    }
}
*/
