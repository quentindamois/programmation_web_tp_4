console.log("Je suis la console !");
function bienvenue() //Etape 1 pour afficher une fenêtre pop-up
{
    alert('Votre formulaire a été envoyé');
    //setTimeout(bienvenue(),100); Faire réapparaître la fenêtre pop-up 1 sonde (100ms) après l’avoir fermée.
    //setInterval(bienvenue(),5000); Faire apparaître la fenêtre toutes les 5 secondes.
}

var minuscule = "abcdefghijklmnopqrstuvwxyz";
var majuscule = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
var chiffre = "0123456789";
var carspecial = "%!&*^()#$:";
function incrementerDuree() {
    durees = document.getElementsByClassName("duree");
    if (durees.lenght != 0) {
        Array.prototype.forEach.call(durees, function(dureeElement) {
            let valeur = parseInt(dureelement.textCotent);
            dureeElement.textContent = valeur + 1;
        })
    }
}

setInterval(incrementerDuree(), 100);

function generer() {
    var monFormulaire = document.forms.ajoutPWD;//forms['addPWD'];
    //console.log(monFormulaire.nombre_caractere.value);
    var password = "";
    var listecar = "";
    do {
        password = "";
        listecar = "";
    if (monFormulaire.elements["minuscule"].checked) {
        listecar = listecar + minuscule;
    }
    if (monFormulaire.elements["majuscule"].checked) {
        listecar = listecar + majuscule;
    }
    if (monFormulaire.elements["chiffre"].checked) {
        listecar = listecar + chiffre;
    }
    if (monFormulaire.elements["symbole"].checked) {
        listecar = listecar + carspecial;
    }
    //console.log(listecar.lenght);
    for (var i  = 1; i <= monFormulaire.elements["number"].value; i++) {
        var randomNumber = Math.floor(Math.random() * listecar.length);
        password = password + listecar.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);} while(((password.match(/[a-z]/) == null) && monFormulaire.elements["minuscule"].checked) || ((password.match(/[A-Z]/) == null) && monFormulaire.elements["majuscule"].checked) || ((password.match(/[0-9]/) == null) && monFormulaire.elements["chiffre"].checked) || ((password.match(/!|[#-\&]|[\(-\+]|\^|:/) == null) && monFormulaire.elements["symbole"].checked));
    var newLine = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    var duree = document.createElement("td");
    duree.classeList = "duree";
    duree.textContent = "0";
    col1.textContent = monFormulaire.elements["number"].value;
    col2.textContent = monFormulaire.elements["Date de validité"].value;
    col3.textContent = monFormulaire.elements["monselect"].value;
    col4.textContent = monFormulaire.elements["Site"].value;
    col5.textContent = password;
    newLine.append(col1, col2, col3, col4, col5, duree);
    var monTableau = document.getElementById("montab");
    monTableau.appendChild(newLine);}


