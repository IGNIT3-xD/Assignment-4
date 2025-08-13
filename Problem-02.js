function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid'
    }

    // let removeSpaces = str.trim().split(/\s+/).join('').toUpperCase()
    let removeSpaces = str.replaceAll(' ', '').toUpperCase()
    return removeSpaces
}

console.log(onlyCharacter("  h e llo wor   ld"))