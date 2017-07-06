var pointJoueur = 0;
var pointOrdi = 0;

var pseudo = prompt('Quelle est ton pseudo?');
document.getElementById('pseudo').innerHTML = pseudo;


while (pointJoueur < 3 && pointOrdi < 3) {
    var choixUtilisateur = prompt("On va jouer au pierre, feuille, ciseaux. Choisi l'un des trois!");
    var choixOrdi = Math.random();
    if (choixOrdi < 0.34) {
        choixOrdi = "pierre";
    } else if (choixOrdi <= 0.67) {
        choixOrdi = "feuille";
    } else {
        choixOrdi = "ciseaux";
    }

    console.log("User" + ":" + " " + choixUtilisateur + " " + "/" + " " + "Ordi" + ":" + " " + choixOrdi);

    if (choixUtilisateur == "pierre" && choixOrdi == "ciseaux" || choixUtilisateur == "feuille" && choixOrdi == "pierre" || choixUtilisateur == "ciseaux" && choixOrdi == "feuille") {
        console.log("Tu as de la chance je t'ai laissé gagner!");
        pointJoueur++;
    } else if (choixUtilisateur === null) {
        console.log("Espèce de lâche, tu viens d'abandonner!!");
        break;
    } else if (choixUtilisateur == "pierre" && choixOrdi == "pierre" || choixUtilisateur == "feuille" && choixOrdi == "feuille" || choixUtilisateur == "ciseaux" && choixOrdi == "ciseaux") {
        console.log("Match nul, personne ne gagne!");
    } else if (choixUtilisateur == "ciseaux" && choixOrdi == "pierre" || choixUtilisateur == "pierre" && choixOrdi == "feuille" || choixUtilisateur == "feuille" && choixOrdi == "ciseaux") {
        console.log("Tu as perdu, c'est moi qui gagne!!!");
        pointOrdi++;
    } else if (choixUtilisateur === "" || choixUtilisateur !== "pierre" || choixUtilisateur !== "feuille" || choixUtilisateur !== "ciseaux") {
        console.log("Entre une réponse, correct");
    }


    console.log("User" + " " + pointJoueur);
    console.log("Ordi" + " " + pointOrdi);
    console.log("");
}

if (pointJoueur === 3) {
    alert.log("Bien joué, c'est une victoire pour toi");
} else {
    alert.log("LOOSER! je t'ai eu!!!");
}



//Tant que user ne gagne pas 3 fois OU ordi ne gagne pas 3 fois
//Relance le jeu
//
