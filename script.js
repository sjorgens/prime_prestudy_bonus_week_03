var gotNumber = false;

while (gotNumber == false) {
	var userNumber = prompt("Enter a valid number.");

	if (userNumber.length == 0) {
		alert("You didn't enter any value.");
	} else {

		if (userNumber >= 0 || userNumber < 0) {
			gotNumber = true;
		} else {
			alert("\"" + userNumber + "\" is not a valid number!");
		}
	}
}

// returns the square of the passed value
function valueSquared(a){
	var numSquared = a * a;
	return numSquared;
}

// doubles the passed value and returns the result
function valueDoubled(b){
	var numDoubled = b * 2;
	return numDoubled;
}

// subtracts the passed value from 100 and returns the result
function valueSubtractedFromOneHundred(c){
	var numSubtractedFromOneHundred = 100 - c;
	return numSubtractedFromOneHundred;
}

// function chain to alert the user of the value returned
alert("Your return value is \"" + valueSquared(valueDoubled(valueSubtractedFromOneHundred(userNumber))) + "\".");
