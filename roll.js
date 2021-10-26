function rollDie(numSides) {
    return 1 + Math.floor(Math.random()*numSides)
}

function roll(input) {
    if (context.params.event.content.startsWith("/r")) {
        let rolls = context.params.event.content.split(' ').slice(1);

        let rollSUm = 0;
    }
}