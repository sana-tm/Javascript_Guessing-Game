	
// random value generated 
	var y = Math.floor(Math.random() * 10 + 1); 

// counting the number of guesses 
	var guess = 1; 
	
document.getElementById("submitguess").onclick = function(){ 
	
	 
var x = document.getElementById("guessField").value; 

if(x == y) 
{	 
	alert("Good Work!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS "); 
} 
else if(x > y)
{	 
	guess++; 
	alert("NOT MATCHED!! TRY A SMALLER NUMBER"); 
} 
else
{ 
	guess++; 
	alert("NOT MATCHED!! TRY A GREATER NUMBER") 
} 
} 