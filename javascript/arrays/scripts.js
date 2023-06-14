const colores = ['blanco', 'azul', 'rojo']

colores.push('Amarillo')
colores.push(['naranjo', 'verde'])
colores.push('Morado')

const ultimo = colores.pop()

const posAmarillo = colores.indexOf('Amarillo')
const posNegro = colores.indexOf('Negro')

const autos = ['Nissan', 'Peugeot', 'Mazda', 'Citroen']
const otros_autos = autos.slice()

otros_autos.push('Suzuki')

function invertir (frase) {
  let retorno = frase.split('')
  retorno = retorno.reverse()
  return retorno.join('')
}

otros_autos.forEach(function (auto) {
  // escribo lo que ejecutaremos sobre un auto
  console.log('Me gusta manejar un ' + auto)
})

// 1. Iniciamos un iterador
// 2. Condicion para mantenerse en el ciclo
// 3. Nos acercamos al fin del ciclo
const multiplos5 = []
for (let i=1000; i >= 0; i -= 5) {
  // instrucciones de cada iteración
  multiplos5.push(i)
}

for (let i=0; i < autos.length; i++) {
  const auto_hoy = otros_autos[i]
  console.log("Hoy manejé un " + otros_autos[i])
}

function printReserve (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function reverser (arr) {
  return arr.slice().reverse()
}

function ambos_cursos (lista_html, lista_css) {
  const ambos = []

  for (let i = 0; i < lista_html.length; i++) {
    const alumno = lista_html[i]

    if (lista_css.indexOf(alumno) >= 0) {
      ambos.push(alumno)
    }
  }

  return ambos
}