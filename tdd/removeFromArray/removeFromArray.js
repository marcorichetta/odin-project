const removeFromArray = function(original) {
    let resultado = [];
    let posicion;
    
    // For each argument passed to the function AFTER the first array
    for (let i=1; i < arguments.length; i++) {
        posicion = original.indexOf(arguments[i]) // Search and save the position of the argument
        if (posicion !== -1){ // Error checking for arguments not found
            original.splice(posicion, 1);  // Remove 1 argument from posicion on original
        }
    }
    resultado = original;

    return resultado;
}

module.exports = removeFromArray
