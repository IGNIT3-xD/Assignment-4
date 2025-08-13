function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid'
    }

    let removeSpaces = str.trim().split(/\s+/).join('').toLocaleUpperCase()
    return removeSpaces
}

console.log(onlyCharacter("  h e llo wor   ld"))