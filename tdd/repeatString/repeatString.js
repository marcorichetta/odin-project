const repeatString = function(word, n) {
    if (n < 0) {
        return 'ERROR';
    }
    
    let palabra = '';
    for (let i = 0; i < n; i++) {
        palabra += word;
    }
    return palabra;
}

module.exports = repeatString
