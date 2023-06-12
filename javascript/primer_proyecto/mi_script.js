const _nombre = 'Sara'

const edad = 18

console.log('preparando el mensaje')

const mensaje = 'Hola, soy ' + _nombre + ', y tengo ' + edad + ' años'

console.log(mensaje)

// Ejemplo de cuota de un auto
const monto = 9990000
const meses = 36
const interes = 0.025

console.log(monto, meses, interes)

couta = monto / ((1 - (1+interes)**(-meses)) / interes)

console.log('El monto a pagar mensualmente es de $' + couta)

// Ejemplo de logica proposicional
const esVerdadero = ((8+12) <= (5*4)) && (3**3 == 27) // true

const otraCondicion = (99/11 != 3+3+3) || (8>7) // true

if (edad >= 60) {
  const frase = nombre + ' sí se puede jubilar'
  console.log(frase)
}
else {
  const frase = nombre + ' no se puede jubilar'
  console.log(frase)
  const cuanto_queda = 60 - edad
}

// console.log("A Sara le quedan " + cuanto_queda + ' años para jubilar')

if (edad >= 21) {
  const frase = 'Si puede pasar al bar'
  console.log(frase)

  const numSecreto = "10"
  const numUsuario = prompt('Elija un número')

  if (numSecreto == numUsuario) {
    console.log("Si puede pasar a la fiesta")
  }
  else {
    console.log("No puede pasar a la fiesta")
  }
}
else {
  console.log("No puede pasar al bar")
}

const amigo = prompt('¿Como te llamas?')

if (amigo == 'pedro') {
  console.log("Tu eres amigo de Sara")
}
else if (amigo == 'juan') {
  console.log("Tu eres el mejor amigo de Sara")
}
else if (amigo == 'diego') {
  console.log("Tu eres un conocido de Sara")
}
else {
  console.log('Sara no te conoce')
}

const numTragos = 2
numTragos >= 1 ? console.log("No puede manejar") : log('Si puede manejar')
