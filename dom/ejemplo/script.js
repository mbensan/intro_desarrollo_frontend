// traernos los elementos del DOM a JS
const brand = document.querySelector('.navbar-brand')
const form_btn = document.querySelector('#form-btn')
const a_home = document.querySelector('.nav-link.active')
const form_nav = document.querySelector('nav form')


// puedo traer varios elementos que cumplan con un selector CSS
const headers = document.querySelectorAll('.accordion-header button')

// modificar directamente el CSS de los elementos
brand.style.color = 'purple'
brand.style['background-color'] = 'grey'

// modificar las clases
if (form_btn.classList.contains('btn-primary')) {
  form_btn.classList.remove('btn-primary')
  form_btn.classList.add('btn-success')
}

// modificar los atributos
a_home.setAttribute('href', 'https://www.biobiochile.cl/')
a_home.setAttribute('target', '_blank')

for (let i=0; i<headers.length; i++) {
  headers[i].style['text-decoration'] = 'underline'
}

// modificar el texto interno
form_nav.textContent = '<h4 class="text-secondary">Cambiamos el texto interno</h4>'

// modificar el contenido interno
form_nav.innerHTML = '<h4 class="text-secondary">Cambiamos el texto interno</h4>'

// acceder al "value" de los elementos
const input_name = document.querySelector('#exampleInputEmail1')
input_name.value = 'ejemplo@mail.com'

console.log(`El usuario ha escrito su mail: ${input_name.value}`)
