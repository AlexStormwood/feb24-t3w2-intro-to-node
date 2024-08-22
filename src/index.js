
console.log("Dice roller app is now running!");


/**
 * Generate a random number between 1 and diceSize, inclusive. 
 * @param {number} diceSize The maximum that the dice can roll.
 * @returns {number} The number rolled on the dice.
 */
function rollDice(diceSize = 20){
	let diceResult = 0;


	diceResult = Math.ceil(Math.random() * diceSize);

	return diceResult;
}


// console.log("Random dice roll result is: " + rollDice());


// try {
	
// } catch (error) {
// 	console.log("Reached the error catch block!");
// 	console.log(error);
// }


// prompt([
// 	{
// 		type: "number",
// 		name: "dice_size",
// 		message: "What size of dice do you wanna roll?"
// 	}
// ]).then((answer) => {
// 	console.log("Raw answer data from the prompt package is:" + JSON.stringify(answer));
// 	console.log(rollDice(answer.dice_size));
// }).catch((error) => {
// 	console.log("Error from dot-catch block");
// 	console.log(error);
// });

 
const prompt = require('prompt-sync')({sigint: true});

try {
	let userDiceSize = prompt('What size dice do you wanna roll? ');

	// Check if user entered a number 
	if (Number.isNaN(userDiceSize)){
		throw new Error("User did not enter a number");
	}


	// Check if number is valid (eg. 1 or greater, whole numbers)
	let userInputAsNumber = parseInt(userDiceSize);

	console.log(rollDice(userInputAsNumber));
} catch (error) {
	console.log("Error occured!");
	console.log(error);
}
