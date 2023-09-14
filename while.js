//while loop

let guess = prompt("Guess a number:");
let randomNumber = Math.floor(Math.random() * 10);
while(true){
    if(guess != randomNumber){
        guess = Number(prompt("Guess again."));
        continue;
    }
    break;
}
console.log(`Correct Guess!`);
