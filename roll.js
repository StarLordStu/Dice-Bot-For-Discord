function rollDie(numRolls, numSides) {
    //this finction is a for loop that will roll a (numSides) die (numRoll) times
    let result = 0
    for(let step = 0; step < numRolls; step++){
        result = 1 + Math.floor(Math.random()*numSides)
    }
    return result
}
rollDie(1,6);
