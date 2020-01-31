const reverseString = function(word) {
    vector = word.split('');
    let palabra = '';
    for (let i = 0; i < word.length; i++) {
        palabra += vector.pop();
    }
    return palabra;
}

module.exports = reverseString
