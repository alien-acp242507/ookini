function calcularPrecio(precioUnitario, cantidad) { //parametros: PrecioUnitario, cantidad
    const total=precioUnitario*cantidad;
    return total;
}

console.log (calcularPrecio(5,2));
console.log (calcularPrecio(3,4));     //Argumentos, los valores con los que se llenan los espacios
console.log (calcularPrecio(7,1));


//función que decide
function puedeReservar(cantidad) {
    if (cantidad<=2) {
        return true;             
    } else {
        return false;
    }    
}

/*if (puedeReservar(2)) {
    console.log("Reserva confirmada")        
} else {
    console.log("Lo siento, maximo 2 tazas por persona")
}*/


//Un ejemplo de IA más corta pero hace lo mismo
function puedeReservar(cantidad) {
    if (cantidad<=2) {
        return true;
    } else {
        return false;
    }
}

