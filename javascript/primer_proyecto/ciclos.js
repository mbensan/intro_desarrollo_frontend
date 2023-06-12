

let num_pasajero = 1

while (num_pasajero <= 20) {
  console.log("Usted es el pasajero " + num_pasajero)
  num_pasajero++
}

console.log("El pasajero " + num_pasajero + ' quedó fuera del bus')

const inicio = 100
while (inicio <= 2000) {
  console.log(inicio)
  inicio += 100
}


// Ejemplo de ciclo infinito con Prompt
let palabraMagica = "abrete sesamo";

let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?");

while (intento != palabraMagica) {
  alert("Esa palabra es incorrecta");
  intento = prompt("Inténtelo nuevamente");
}
alert("¡Bienvenido a La Caverna De Los 40 Ladrones!");

