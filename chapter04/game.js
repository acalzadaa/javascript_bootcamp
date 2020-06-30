// find a number between m and n
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// return one of six random faces
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
    round++;

    console.log(`round ${round}`);
    console.log(`\t starting funds: ${funds}p`);
    
    
    const bets = { crown: 0, anchor: 0, heart: 0, space: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);

    // thomas will take some coins... if they are 7 he will bet all to heart

    //Placing the bets
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining -= bet;
        } while (remaining > 0)
    }
    funds = funds - totalBet;

    console.log('\tbets: ' +
    Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
    ` (total: ${totalBet} pence)`);

    //Rolling the dice
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }

    console.log(`\thand: ${hand.join(', ')}`);

    //Finding the winnings
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings += bets[face];
    }
    funds += winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funs: ${funds}`);