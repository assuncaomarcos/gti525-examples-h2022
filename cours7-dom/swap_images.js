const wiki = "https://upload.wikimedia.org/wikipedia/en/";

const CHARACTERS = [
    {src: "5/53/Snoopy_Peanuts.png", name: "Snoopy"},
    {src: "2/22/Charlie_Brown.png", name: "Charlie Brown"},
    {src: "2/24/Marcie_from_Peanuts.png", name: "Marcie"},
    {src: "5/5e/Linus_van_Pelt.gif", name: "Linus van Pelt"},
    {src: "e/e9/Lucy_van_Pelt.png", name: "Lucy van Pelt"},
    {src: "a/a0/Peppermint_Patty.png", name: "Peppermint Patty"},
    {src: "8/88/Sally_Brown.png", name: "Sally Brown"},
    {src: "b/b7/Schroeder_Piano.png", name: "Schroeder"},
    {src: "e/e1/PigPen_(Peanuts).png", name: "Pig-Pen"},
    {src: "9/9d/Franklin_(Peanuts).png", name: "Franklin"},
    {src: "d/db/Woodstock.png", name: "Woodstock"},
];

function changeImage() {
    let img = document.getElementById("#character");
    let obj = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    img.src = obj.src;
    img.alt = obj.name;
}
