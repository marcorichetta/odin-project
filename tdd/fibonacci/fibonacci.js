const fibonacci = function(n) {

    n = parseInt(n);
    
    if (n < 0) {
        return 'OOPS';
    }
    
    let a = 1;
    let b = 1;
    let tempA;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);
        tempA = a;
        a = b;
        b += tempA;
    }
    return result[n-1];
}

module.exports = fibonacci
