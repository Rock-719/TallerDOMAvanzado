// ==========================================
// 1. Cambiar un título con un botón
// ==========================================
const btnCambiarTitulo = document.getElementById("btn-cambiar-titulo");
const tituloCambiable = document.getElementById("titulo-cambiable");

btnCambiarTitulo.addEventListener("click", () => {
  tituloCambiable.textContent = "¡El título ha sido cambiado!";
});

// ==========================================
// 2. Cambiar el color de un texto
// ==========================================
const btnCambiarColor = document.getElementById("btn-cambiar-color");
const textoColor = document.getElementById("texto-color");

btnCambiarColor.addEventListener("click", () => {
  const colores = ["#e74c3c", "#2ecc71", "#9b59b6", "#34495e"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  textoColor.style.color = colorAleatorio;
});

// ==========================================
// 3. Mostrar / Ocultar un elemento
// ==========================================
const btnToggle = document.getElementById("btn-toggle");
const boxToggle = document.getElementById("box-toggle");

btnToggle.addEventListener("click", () => {
  boxToggle.classList.toggle("hidden");
});

// ==========================================
// 4 y 5. Crear y Eliminar elementos dinámicamente
// ==========================================
const btnCrear = document.getElementById("btn-crear");
const contenedorDinamico = document.getElementById("contenedor-dinamico");

btnCrear.addEventListener("click", () => {
  const nuevoElemento = document.createElement("div");
  nuevoElemento.style.margin = "5px 0";
  nuevoElemento.style.display = "flex";
  nuevoElemento.style.justifySpaceBetween = "space-between";

  nuevoElemento.innerHTML = `
    <span>Elemento Creado</span>
    <button class="btn-danger" onclick="eliminarElemento(this)">Eliminar</button>
  `;

  contenedorDinamico.appendChild(nuevoElemento);
});

function eliminarElemento(boton) {
  boton.parentElement.remove();
}

// ==========================================
// 6. Crear una lista a partir de un Array
// ==========================================
const frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Mango"];
const listaArray = document.getElementById("lista-array");

frutas.forEach((fruta) => {
  const li = document.createElement("li");
  li.textContent = fruta;
  listaArray.appendChild(li);
});

// ==========================================
// 7. Crear tarjetas a partir de Objetos
// ==========================================
const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teclado", precio: 40 },
  { nombre: "Mouse", precio: 20 },
];

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

productos.forEach((prod) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h3>${prod.nombre}</h3>
    <p>Precio: $${prod.precio}</p>
  `;
  contenedorTarjetas.appendChild(card);
});

// ==========================================
// 8. Crear un formulario y mostrar sus datos
// ==========================================
const formContacto = document.getElementById("formulario-contacto");
const resultadoForm = document.getElementById("resultado-form");

formContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  resultadoForm.innerHTML = `<p><strong>Registrado:</strong> ${nombre} (${correo})</p>`;
  formContacto.reset();
});

// ==========================================
// 9. Crear una lista de tareas (To-Do List)
// ==========================================
const btnAgregarTarea = document.getElementById("btn-agregar-tarea");
const inputTarea = document.getElementById("nueva-tarea");
const listaTareas = document.getElementById("lista-tareas");

btnAgregarTarea.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.style.margin = "5px 0";
  li.innerHTML = `
    <span>${texto}</span>
    <button class="btn-danger" style="padding: 2px 6px; margin-left: 10px;">Completar</button>
  `;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  listaTareas.appendChild(li);
  inputTarea.value = "";
});

// ==========================================
// 10. CRUD Completo de Estudiantes
// ==========================================
let estudiantes = [
  { id: 1, nombre: "Luis Díaz", edad: 29 },
  { id: 2, nombre: "Luis Suarez", edad: 28 },
];

const formEstudiante = document.getElementById("form-estudiante");
const tablaEstudiantes = document.getElementById("tabla-estudiantes");
const estudianteId = document.getElementById("estudiante-id");
const estudianteNombre = document.getElementById("estudiante-nombre");
const estudianteEdad = document.getElementById("estudiante-edad");

function renderEstudiantes() {
  tablaEstudiantes.innerHTML = "";
  estudiantes.forEach((est) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${est.nombre}</td>
      <td>${est.edad}</td>
      <td>
        <button class="btn-warning" onclick="editarEstudiante(${est.id})">Editar</button>
        <button class="btn-danger" onclick="eliminarEstudiante(${est.id})">Eliminar</button>
      </td>
    `;
    tablaEstudiantes.appendChild(tr);
  });
}

formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = estudianteId.value;
  const nombre = estudianteNombre.value;
  const edad = parseInt(estudianteEdad.value);

  if (id) {
    // Actualizar (Update)
    estudiantes = estudiantes.map((e) =>
      e.id == id ? { id: Number(id), nombre, edad } : e,
    );
  } else {
    // Crear (Create)
    const nuevoEstudiante = {
      id: Date.now(),
      nombre,
      edad,
    };
    estudiantes.push(nuevoEstudiante);
  }

  formEstudiante.reset();
  estudianteId.value = "";
  renderEstudiantes();
});

function editarEstudiante(id) {
  const est = estudiantes.find((e) => e.id === id);
  if (est) {
    estudianteId.value = est.id;
    estudianteNombre.value = est.nombre;
    estudianteEdad.value = est.edad;
  }
}

function eliminarEstudiante(id) {
  estudiantes = estudiantes.filter((e) => e.id !== id);
  renderEstudiantes();
}

// Carga inicial
renderEstudiantes();
