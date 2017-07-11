var pseudo;
var choixUtilisateur;
var choixOrdi;
var pointJoueur = 0;
var pointOrdi = 0;



pseudo = prompt('Quelle est ton pseudo?');
document.getElementById('pseudo').innerHTML = pseudo;



// Fonction Pour savoir le choix de l'utilisateur.
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

//Boucle pour relancer les manche tant qu'aucun joueur n'a atteind le score de 3.
while (pointJoueur < 3 && pointOrdi < 3) {

	document.getElementById('pierre').addEventListener('click', pierreFunction());
	document.getElementById('feuille').addEventListener('click', feuilleFunction());
	document.getElementById('ciseaux').addEventListener('click', ciseauxFunction());
	console.log(choixUtilisateur);


	//Système de ramdom pour attribuer un choix aléatoire à l'ordinateur.

	choixOrdi = Math.random();
	if (choixOrdi < 0.34) {
		choixOrdi = 'pierre';
		document.getElementById('compArene').innerHTML = choixOrdi;
	} else if (choixOrdi <= 0.67) {
		choixOrdi = 'feuille';
		document.getElementById('compArene').innerHTML = choixOrdi;
	} else {
		choixOrdi = 'ciseaux';
		document.getElementById('compArene').innerHTML = choixOrdi;
	}



	//Système de comparaison pour savoir qui gagne la manche.

	//Condition pour savoir si le joueur à gagner.
	if (choixUtilisateur === 'pierre' && choixOrdi === 'ciseaux' || choixUtilisateur === 'feuille' && choixOrdi === 'pierre' || choixUtilisateur === 'ciseaux' && choixOrdi === 'feuille') {
		document.getElementById('resultat').innerHTML = "Tu as de la chance je t'ai laissé gagner!";
		pointJoueur++;
		//incrémentation des points. 
	}

	//Comparaison pour savoir quand il y a match nul.
	else if (choixUtilisateur === choixOrdi) {
		document.getElementById('resultat').innerHTML = "Match nul, personne ne gagne!";
	}

	//Comparaison pour savoir quand le joueur perd.
	else {
		document.getElementById('resultat').innerHTML = "Je t'ai eu c'est moi qui gagne!!!";
		pointOrdi++;
		//incrémentation des points.
	}

	document.getElementById('userScore').innerHTML = pointJoueur;
	document.getElementById('computerScore').innerHTML = pointOrdi;

}


//Condition pour le message de fin de partie selon le vainqueur.
if (pointJoueur === 3) {
	document.getElementById('resultat').innerHTML = "Bien joué, c'est une victoire pour toi";
} else {
	document.getElementById('resultat').innerHTML = "LOOSER! je t'ai eu!!!";
}
