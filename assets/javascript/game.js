var hangman = {
	win:1, 		// Storing the win points
	currentWord: ['object', 'var', 'if', 'function','else'], 	// Storing words

	
	// Getting a random word from the current word array
	randomWord: function(){
		var result = Math.floor(Math.random() * this.currentWord.length);
		var word = this.currentWord[result];

		return word;
	},


	// Storing value for guess remaining
	guessRaiming: 9,


	// Grabbing ID from the DOM by passing id as a parameter
	grabId: function(element){
		var grab = document.getElementById(element);
		return grab;
	},


	// Output data to the DOM with first parameter id, and second values
	output: function(el, val){
		this.grabId(el).textContent = val;
	}

};


// Outputting values to the current word!
var word = hangman.randomWord();
console.log(word);

// The array of letters from the random word
var arr = word.split('');


// ---- replacing every single letter
var piece = [];


// Looping or mapping over the letters of the random word
arr.map(function(element){
	var result = element.replace(element, ' _ ');
	piece.push(result);
});


// Outputing it to the DOM

var decreasing = hangman.guessRaiming;






// Do this with the user's pressing a button
document.onkeyup = function(event){

	// Outputting the key letter to the DOM in the already guessed
	var typedWord = document.createTextNode(event.key + ',');
	hangman.grabId("Guessed").appendChild(typedWord);

	arr.map(function(element, index){

		if(element === event.key){
			
			piece[index] = element;
		};


	});
	

//hangman.output('currentWord', piece);

var currentWordDom = piece.join("");


// Output to the current word to the DOM
hangman.output('currentWord', currentWordDom);

//console.log(word);

if(currentWordDom === word){
	hangman.grabId('win').textContent = "Wins: " + hangman.win++;
	word = hangman.randomWord();
	console.log(word);
}
else{

	hangman.grabId('guessRemaining').textContent = "Your chances remaining is " + decreasing--; 

	console.log("They are not equal");
};


if(decreasing<-1){
	alert("GAME OVER");
	location.reload();
}


};

