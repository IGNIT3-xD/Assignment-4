function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }

    const fine = fare * (20 / 100) + 30
    return fare + fine
}

console.log(totalFine(200))