 // Función para mostrar u ocultar el menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("activo");
}

// Función para mostrar el modal (si lo usás en contacto.html)
function mostrarModal(event) {
  event.preventDefault();
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "flex";
  }
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}
