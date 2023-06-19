const tabla = document.querySelector('#sampleTable')

tabla.style['border'] = '2px solid black'
tabla.style.padding = '1rem'
tabla.style['border-radius'] = '10px'

function insert_Row () {
  const num_filas = document.querySelectorAll('#sampleTable tr').length
  tabla.innerHTML += `
    <tr>
      <td>Fila ${num_filas + 1} Celda 1</td>
      <td>Fila ${num_filas + 1} Celda 2</td>
    </tr>
  `
}

const options = document.querySelectorAll('#colorSelect option')
for (let i=0; i<options.length; i++) {
  const option = options[i]
  option.style['background-color'] = option.textContent
}
options[3].style.color = 'white'

function removecolor() {
  const option_selected = document.querySelector('#colorSelect option:selected')
  console.log(option_selected)
}