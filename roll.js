//this function takes the text from the input and puts it in a variable
function formdata() {
    let rollReq = document.getElementById("request").value;

    let [numRolls, numSides, modifier] = rollReq.split(/[dD+-]{1}/);
    //let mod = rollReq.match(/([+-]{1})([0-9]{1,})/);
    console.log(numRolls, numSides, modifier);
    rollDie(numRolls, numSides, modifier);
}

//this function is a for loop that will roll a (numSides) die (numRoll) times
function rollDie(numRolls, numSides, modifier) {

    //this if statement will hellp account for missing value for modifier. ex(2d4)
    if (modifier == undefined) {
        modifier = 0;
    }

    if (numRolls && numSides)
        var result = 0

    for (let step = 0; step < numRolls; step++) {

        result += (1 + Math.floor(Math.random() * numSides))
    }
    //+ + will turn the variable from a string into a number
    let total = result + + modifier
    console.log(total);
    return total
}

function roll(str) {
    let [numRolls, numSides, modifier] = str.split(/[dD+-]{1}/);
    // splitting the string returns these as strings, so we have to cast them as ints
    // TODO: this does not do proper error handling for incorrect formats in the input
    //       string.
    numRolls = parseInt(numRolls);
    numSides = parseInt(numSides);
    modifier = parseInt(modifier);
    let total = 0;
    for (let i = 0; i < numRolls; i++) {
        total += rollSingleDie(numSides);
    }
    if (modifier !== undefined) {
        total += modifier;
    }
    return total;
}

function rollSingleDie(numSides) {
    return 1 + Math.floor(Math.random() * numSides);
}
