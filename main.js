let readlineSync = require('readline-sync');
let fruits = require('./fruits');
let persons = require('./persons');
let getFunctionFruite = fruits.fruit();
let getFunctionPerson = persons.person();
let Hint = [fruits.hintFruit(),persons.hintPerson()];

console.log("Select Category: \n 1)Fruits  2)persons");
let wordType = readlineSync.question();
wordType = parseInt(wordType);
let randomWord = Math.floor(Math.random() * 5);
let randomHint = randomWord;
switch(wordType){
    case 1:
    checkInputGuess(getFunctionFruite[randomWord],Hint[0]);

    break;
    case 2:
    checkInputGuess(getFunctionPerson[randomWord],Hint[1]);
    break;
    default :
    console.log("invalid");
}


function checkInputGuess(wordTypeGuess , Hint){
  
    let progressWord = [] , Guess ,count=0, i = 10;
    console.log(Hint[randomHint]);
    for(let j=0;j<wordTypeGuess.length;j++){
        progressWord.push("_");
    }
    while(i>0){
        Guess  = readlineSync.question("You can guess word in :"+i+"\n");
        Guess = Guess.charAt(0);
    for(let j=0;j<wordTypeGuess.length;j++){
        if(wordTypeGuess[j]==Guess){ 
            progressWord[j] = Guess;
            count ++;
        }      
    }
    i--; 
    console.log(progressWord);
   
    if(count == wordTypeGuess.length){
        i = 0;
        console.log("You win ");
    }
    else if(i==0){
        console.log("You lose");
    }
           
         
         
     }
     
}


