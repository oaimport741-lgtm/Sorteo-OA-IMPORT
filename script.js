const form = document.getElementById("formularioDatos")
const agregarBtn = document.getElementById("agregarCodigo")
const contenedorCodigos = document.getElementById("codigos")
const loader = document.getElementById("loader")

agregarBtn.addEventListener("click", () => {
const input = document.createElement("input")
input.type = "text"
input.name = "codigo[]"
input.placeholder = "Código de Barras del Producto"
input.required = true
contenedorCodigos.appendChild(input)
})

form.addEventListener("submit", function(e){
e.preventDefault()
loader.style.display = "block"

setTimeout(()=>{
loader.style.display="none"
document.getElementById("mensaje").innerText="Datos enviados correctamente"
form.reset()
},1000)
})

const toggle = document.getElementById("menuToggle")
const menu = document.getElementById("menu")

toggle.addEventListener("click", ()=>{
menu.classList.toggle("activo")
})
