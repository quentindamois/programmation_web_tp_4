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


var mesPWDs = [];

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
                else {
                    dureeElement.style.color = "grey";
                }
            }
            mesPWDs[i].duree = valeur;
            i = i + 1;
        });
    }
}

function generer() {
    console.log(mesPWDs);
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
    pushPWD(PwdSaisi(password));
    console.log(mesPWDs);
    var monTableau = document.querySelector("#montab tbody");
    monTableau.innerHTML = "";
    mesPWDs.forEach(elementPWD => {
        let newLine = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");
        let col5 = document.createElement("td");
        col5.classList.add("password");
        let duree = document.createElement("td");
        duree.classList.add("duree");
        duree.textContent = elementPWD.duree;
        col1.textContent = elementPWD.nombrecar;
        col2.textContent = elementPWD.DateCreation;
        col3.textContent = elementPWD.categorie;
        col4.textContent = elementPWD.site;
        col5.textContent = elementPWD.pwd;
        newLine.append(col1, col2, col3, col4, col5, duree);
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
           removeChild(lastChild);  
        } 
}



/* Partie 3 : classe Pwd */



function PwdSaisi(pwd)
{
    var monFormulaire = document.forms.ajoutPWD;
    const NewPwd = {
        nombre :monFormulaire.elements["number"].value,
        date : monFormulaire.elements["Date de validité"].value,
        categorie : monFormulaire.elements["monselect"].value,
        site : monFormulaire.elements["Site"].value,
        mdp : pwd
    };
     console.log("Nombre de caractères saisi : "+NewPwd.nombre+"\n"+
     "Date de validité : "+ NewPwd.date+"\n"+"Catégorie saisie: "+
     NewPwd.categorie +"\n"+"Site saisi: "+NewPwd.site+"\n"+
     "Mot de passe généré : "+NewPwd.mdp);


     const NvPWD = new PWD(monFormulaire.elements["number"].value,
     monFormulaire.elements["Date de validité"].value, 
     monFormulaire.elements["monselect"].value, 
     monFormulaire.elements["Site"].value, pwd);
     console.log(NvPWD);
     return NvPWD;

}

/* Création de la classe PWD*/
class PWD
{
    constructor(nombrecar, DateCreation, categorie,site,pwd)
    {

        this.nombrecar=nombrecar;
        this.DateCreation=DateCreation;
        this.categorie=categorie;
        this.site=site;
        this.pwd=pwd;
        this.duree=0;
    }

    printPwd()
    {
        console.log(`Nombre de caractères saisi : ${this.nombrecar}`);
        console.log(`Date de validité :  :${this.DateCreation}`);
        console.log(`Catégorie saisie :${this.categorie}`);
        console.log(`Site saisi :${this.site}`);
        console.log(`Mot de passe généré :${this.pwd}`);




    }


}

function pushPWD(pwd) {
    mesPWDs.push(pwd);
}