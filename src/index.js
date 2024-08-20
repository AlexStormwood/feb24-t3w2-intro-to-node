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


console.log("Random dice roll result is: " + rollDice());