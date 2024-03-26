function square(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number')
    }
    return Math.pow(number, 2)
}

module.exports = square;