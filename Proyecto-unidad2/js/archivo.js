document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#mi-formulario");
  const resultado = document.querySelector("#resultado");

  formulario.addEventListener("submit", (e) => {
    // 1. Evita que la página se recargue
    e.preventDefault();

    // 2. Obtenemos los valores de los campos principales
    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const cantidad = document.querySelector("#cantidad").value;
    const zona = document.querySelector("#tipo-zona").value;

    // 3. Validación sencilla (revisa que no vayan vacíos los obligatorios)
    if (nombre === "" || correo === "" || telefono === "") {
      resultado.textContent = " Por favor completa los campos de Nombre, Correo y Teléfono.";
      resultado.style.color = "#ff6b6b";
      return;
    }

    // 4. Si todo está correcto, mostramos éxito en el DOM
    resultado.textContent = `¡Felicidades ${nombre}! Has reservado ${cantidad} boleto(s) para la zona ${zona}. Te contactaremos en ${correo}.`;
    resultado.style.color = "#51cf66";

    // Limpiamos el formulario después de enviarlo con éxito
    formulario.reset();
  });
});