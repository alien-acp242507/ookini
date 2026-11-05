const cupoCata=8;
const inscritos=5;


if (cupoCata>inscritos) {
    console.log("Hay cupos, abrir reserva");    
} else {
    console.log("Cata llena, ofrecer lista de espera");
}

//operadores de comparación
8>5   //true
3<10  //true
8>=8  //true
4<=9  //true
5===5 //true
5!==3 //true


const tazas=1;

if (tazas<2) {
    console.log("Puedes reservar");
} else {
    console.log("Maximo solo 2 tazas")
}