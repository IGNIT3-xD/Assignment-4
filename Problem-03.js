function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid'
    }

    const totalFoul1 = player1.foul + player1.cardY + player1.cardR
    const totalFoul2 = player2.foul + player2.cardY + player2.cardR

    if (totalFoul1 < totalFoul2) {
        return player1.name
    }
    else if (totalFoul1 === totalFoul2) {
        return 'Tie'
    }
    else {
        return player2.name
    }
}

const p1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 1 }
const p2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

console.log(bestTeam(p1, p2))