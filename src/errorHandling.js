
try {
	let someBrokenNumber = 10 / "banana";

	if (Number.isNaN(someBrokenNumber)){

		throw new Error("New error: not a number!");
		throw "Not a number, woops!";

	}

	console.log(someBrokenNumber)
} catch (error) {
	console.log("Tried to divide by zero");
	console.log(error);
}

