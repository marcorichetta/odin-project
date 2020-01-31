const ftoc = function(t) {
    let result = (t - 32) * 5/9;

    return parseFloat(result.toFixed(1));
}

const ctof = function(t) {
    let result = t * 9/5 + 32

    return parseFloat(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
