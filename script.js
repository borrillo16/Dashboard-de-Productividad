// capturamos los elementos por su id 
const inputTexto = document.getElementById("input-tarea");
const btnModo = document.getElementById("btn-tema");
const inputFecha = document.getElementById("input-fecha");
const formulario = document.getElementById("form-tarea");
const btnAñadir = document.getElementById("btn-añadir");
const lista = document.getElementById("lista-tareas");
const estadisticas = document.getElementById("estadisticas");

formulario.addEventListener("submit", (e) => {
    // Evita que la página se recarge
    e.preventDefault();
    const texto = inputTexto.value.trim();
    const fecha = inputFecha.value || "Sin Fecha";
    // Validación texto 
    if(texto !== ""){
       crearElemento(texto, fecha);
       formulario.reset();
  
    }else{
        alert("Campo obligatorio")
        return; // El return corta la función aquí y no sigue
        
    }

});

function crearElemento(texto, fecha){
    // Creamos los li
    const li = document.createElement("li");
    // Creamos el botón
    const boton = document.createElement("button");
    li.innerHTML = `<span>${capitalizar(texto)}</span><small>${fecha}</small>`;
    // Añadimos texto al boton y la función onclik para eliminar las tareas de la lista
    boton.textContent ="Eliminar";
    boton.onclick = function() {
        li.remove();
       actualizarContador();
    }
    lista.appendChild(li);
    li.appendChild(boton);
    actualizarContador();
   

};

// Función para que el primer caracter sea mayuscula.
function capitalizar(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};

function actualizarContador() {
    const numeroTareas = lista.children.length;
    estadisticas.textContent = `Tareas pendientes: ${numeroTareas}`;

};
btnModo.addEventListener("click", () => {
       document.body.classList.toggle("oscuro");
});
actualizarContador();