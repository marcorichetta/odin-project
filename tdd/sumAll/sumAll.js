const sumAll = function(a, b) {
    let result = 0;
    
    // Swap variables
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number") {
        return 'ERROR';
    }
    
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}

module.exports = sumAll
