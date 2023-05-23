console.log("Je suis la console !");
var mesPWDs = [];

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


setInterval(incrementerDuree,1000);

function incrementerDuree() {
    //sconsole.log("marche");
    durees = document.getElementsByClassName("duree");
    let i = 0;
    if (durees.lenght != 0) {
        //console.log("marche");
        Array.prototype.forEach.call(durees, function(dureeElement) {
            //console.log(dureeElement.textContent);
            let valeur = parseInt(dureeElement.textContent);
            //console.log(dureeElement.textContent);
            if (valeur == 59) {
                dureeElement.style.color = "grey";
                dureeElement.textContent = valeur + 1;
                mesPWDs[i].pwd = "Expiré !";
                password = document.getElementsByClassName("password");
                password[i].textContent = "Expiré !";
            }
            else {
                if (valeur < 59) {
                    dureeElement.textContent = valeur + 1;
                }
            }
            mesPWDs[i].duree = valeur + 1;
            i = i + 1;
        });
    }
}

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
    
    /*
    var newLine = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    col5.classList.add("password");
    var duree = document.createElement("td");
    duree.classList.add("duree");
    duree.textContent = "0";
    col1.textContent = monFormulaire.elements["number"].value;
    col2.textContent = monFormulaire.elements["Date de validité"].value;
    col3.textContent = monFormulaire.elements["monselect"].value;
    col4.textContent = monFormulaire.elements["Site"].value;
    col5.textContent = password;
    ajoutPWD = new PWD(monFormulaire.elements["number"].value, monFormulaire.elements["Date de validité"].value, monFormulaire.elements["monselect"].value, monFormulaire.elements["Site"].value, password);
    */
    mesPWDs = pushPWD(pwdSaisi(ajoutPWD));
    var monTableau = document.getElementById("montab");
    monTableau.innerHTML = "";
    Array.prototype.forEach.call(mesPWDs, function(elementPWD) {
        console.log(elementPWD);
        newLine.append(elementPWD.nombrecar, elementPWD.DateCreation, elementPWD.categorie, elementPWD.site, elementPWD.pwd, elementPWD.duree);
        monTableau.appendChild(newLine);
    })
    }


/*Partie 2: Test des critères*/
    document.addEventListener("DOMContentLoaded", function() { 
        document.querySelector('#addPWD').addEventListener('submit',function(e)
        {

            if(!(document.getElementById("minuscule").checked) &&
            !(document.getElementById("majuscule").checked) &&
            !(document.getElementById("chiffre").checked) &&
            !(document.getElementById("symbole").checked))
            


            {

                alert('Veuillez sélectionner au moins un critères !');
            }
            else
            {
                generer();
                document.ajoutPWD.reset();

            }
        });
    });

/* Partie 2 : Suppression des lignes du tableau*/
function supprimer2() 
{
        if (confirm("Confirmez-vous la suppression de tous les mots passe générés ?"))
        {
           document.ajoutPWD.submit();
           removeChild(lastChild); /**/ 
        } 
}

function pushPWD(liste_pwd,ajout) {
    liste_pwd.push(ajout);
    return liste_pwd;
}