//this function takes the text from the input and puts it in a variable
function formdata() 
        {
        let rollReq= document.getElementById("request").value;

            let [numRolls, numSides, modifier] = rollReq.split(/[dD+-]{1}/);
            //let mod = rollReq.match(/([+-]{1})([0-9]{1,})/);
            console.log(numRolls, numSides, modifier);
            rollDie(numRolls, numSides, modifier);
        }    
//im having trouble adding the modifier to the result of the dice roll
function rollDie(numRolls, numSides) {
    //this function is a for loop that will roll a (numSides) die (numRoll) times
    let result = 0
    for(let step = 0; step < numRolls; step++){
        result += (1 + Math.floor(Math.random()*numSides))
    }
    console.log(result);
    return result
}
