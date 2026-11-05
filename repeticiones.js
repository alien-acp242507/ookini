console.log("Café Americano");
console.log("Capuchino");
console.log("Café Moka");


// Lista de métodos, se llaman arrays
//una sola variable que contiene varios strings
const metodos=["café Americano", "Capuchino", "Café Moka"];

//Instrucción que recorre la slista y que hace algo en cada elemento
for (const metodo of metodos) {
    console.log (metodo);    
}

console.log("fin de programa");


//ejemplo de un bucle de reservas del día
const reservasDelDia=[2,1,2,1,2];
let totalTazas=0;

for (const cantidad of reservasDelDia) {
    totalTazas=totalTazas+cantidad;
}

//ejemplo de un for que corre pero no hace lo que queremos
//for (const cantidad of reservasDelDia) {
//    totalTazas=cantidad;
//}

console.log(totalTazas);