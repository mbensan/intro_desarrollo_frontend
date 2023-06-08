const nombre = 'Sara'

const edad = 30

console.log('preparando el mensaje')

const mensaje = 'Hola, soy ' + nombre + ', y tengo ' + edad + ' años'

console.log(mensaje)

// Ejemplo de cuota de un auto
const monto = 9990000
const meses = 36
const interes = 0.025

console.log(monto, meses, interes)

couta = monto / ((1 - (1+interes)**(-meses)) / interes)

alert('El monto a pagar mensualmente es de $' + couta)

// Ejemplo de logica proposicional
const esVerdadero = ((8+12) <= (5*4)) && (3**3 == 27) // true

const otraCondicion = (99/11 != 3+3+3) || (8>7) // true
