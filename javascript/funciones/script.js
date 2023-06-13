// declaración de una función
function cantarCumple (nombre='en tu día') {
  console.log("cumpleaños feliz")
  console.log("cumpleaños feliz")
  console.log("felicidades " + nombre)
  console.log("que los cumplas feliz")
  console.log("")
}

// ejecución de una función
cantarCumple('Mario')
cantarCumple('Claudia')
cantarCumple()

function saludar (persona1, persona2, persona3) {
  console.log('Hola ' + persona1)
  console.log('buenos días ' + persona2)
  console.log('¿como estás ' + persona3 + '?')
}
saludar('Ron', 'Harry', 'Hermione')
saludar('Hugo', 'Paco', 'Luis')

function triplicar(num) {
  const triple = num * 3
  return triple
}
const num = 8
const tres_veces = triplicar(num)

function potencia (base, exponente) {
  // 2^4 == 2*2*2*2
  let res = 1
  let veces = 1
  while (veces <= exponente) {
    res = res * base
    veces++
  }
  return res
  // las siguientes líneas NUNCA serán ejecutadas
  const mensaje = 'El resultado fué: ' + res
  console.log(mensaje)
}
const cinco_cuatro = potencia(5, 4)

const num_grande = triplicar(triplicar(triplicar(10)))


function calcular_couta (monto, meses, tasa) {
  const couta = monto / ((1 - (1 + tasa) ** (-meses)) / tasa)
  return couta
}

console.log("Para un préstamo de 10 millones, en 24 meses, a una tasa de 2,5% mensual, debe pagar una couta de $" + calcular_couta(10000000, 24, 0.025))
