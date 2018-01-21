var wins = 0;
var losses = 0; 
var guesses = 9;
var computerChoices;
var computerGuess;
var myChoice; 
var used="";

var computerChoices = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function randompick(){

	computerGuess = computerChoices[Math.floor(Math.random() * 26)];
	console.log (computerGuess);
}



document.onkeyup = function(event){
	myChoice = event.key;
	randompick();
	console.log(myChoice);

if ( myChoice === computerGuess){
	wins = wins+1;
	guesses = 9;
	used = "";
	randompick();
}

	else {
		guesses = guesses - 1;
		
		used=used + myChoice +",";

    if ( guesses === 0){
    	losses = losses + 1;
    	guesses = 9;
    	used = "";
    	randompick();
    } 
      }



document.querySelector("#Wins").innerHTML = wins;
document.querySelector("#Losses").innerHTML = losses;
//document.querySelector("#ComputerGuess").innerHTML = computerGuess;
//document.querySelector("computerChoices").innerHTML = computerChoices;
document.querySelector("#guesses").innerHTML = guesses;
//document.querySelector("#myguess").innerHTML = myChoice;
document.querySelector("#used").innerHTML = used;

}



