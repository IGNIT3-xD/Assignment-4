function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return 'Invalid'
    }

    let sum = 0
    let passCount = 0
    let failCount = 0
    let avg;

    for (const num of marks) {
        sum += num

        if (num > 40) {
            passCount++
        }

        else {
            failCount++
        }
    }

    avg = Math.round(sum / marks.length)

    if (isNaN(avg)) {
        avg = 0
    }

    return { finalScore: avg, pass: passCount, fail: failCount }
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))