var choixUtilisateur;
var choixOrdi;
var pointJoueur = 0;
var pointOrdi = 0;
var pseudo;



pseudo = prompt('Quelle est ton pseudo?');
document.getElementById('pseudo').innerHTML = pseudo;

//Boucle pour relancer les manche tant qu'aucun joueur n'a atteind le score de 3.

while (pointJoueur < 3 && pointOrdi < 3) {

    document.getElementById('pierre').addEventListener('click', pierreFunction);
    document.getElementById('feuille').addEventListener('click', feuilleFunction);
    document.getElementById('ciseaux').addEventListener('click', ciseauxFunction);

    function pierreFunction() {
        choixUtilisateur = document.getElementById('pierre').id;
        document.getElementById('userArene').innerHTML = choixUtilisateur;
    }

    function feuilleFunction() {
        choixUtilisateur = document.getElementById('feuille').id;
        document.getElementById('userArene').innerHTML = choixUtilisateur;
    }

    function ciseauxFunction() {
        choixUtilisateur = document.getElementById('ciseaux').id;
        document.getElementById('userArene').innerHTML = choixUtilisateur;
    }
    console.log(choixUtilisateur);


    //Système de ramdom pour attribuer un choix aléatoire à l'ordinateur.

    choixOrdi = Math.random();
    if (choixOrdi < 0.34) {
        choixOrdi = "pierre";
        document.getElementById('compArene').innerHTML = choixOrdi;
    } else if (choixOrdi <= 0.67) {
        choixOrdi = "feuille";
        document.getElementById('compArene').innerHTML = choixOrdi;
    } else {
        choixOrdi = "ciseaux";
        document.getElementById('compArene').innerHTML = choixOrdi;
    }
    console.log(choixOrdi);


    //Système de comparaison pour savoir qui gagne la manche.
    //Condition pour savoir si le joueur à gagner.
    if (choixUtilisateur === "pierre" && choixOrdi === "ciseaux" || choixUtilisateur === "feuille" && choixOrdi === "pierre" || choixUtilisateur === "ciseaux" && choixOrdi === "feuille") {
        console.log("Tu as de la chance je t'ai laissé gagner!");
        pointJoueur++;
    }

    //Comparaison pour savoir quand il y a match nul.
    else if (choixUtilisateur === choixOrdi) {
        console.log("Match nul, personne ne gagne!");
    }

    //Comparaison pour savoir quand le joueur perd.
    else {
        console.log("Tu as perdu, c'est moi qui gagne!!!");
        pointOrdi++;
    }

    document.getElementById('userScore').innerHTML = pointJoueur;
    document.getElementById('computerScore').innerHTML = pointOrdi;

}



if (pointJoueur === 3) {
    alert("Bien joué, c'est une victoire pour toi");
} else {
    alert("LOOSER! je t'ai eu!!!");
}
