document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#mi-formulario");
  const resultado = document.querySelector("#resultado");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const cantidad = document.querySelector("#cantidad").value;
    const zona = document.querySelector("#tipo-zona").value;

    if (nombre === "" || correo === "" || telefono === "") {
      resultado.textContent = " Por favor completa los campos de Nombre, Correo y Teléfono.";
      resultado.style.color = "#ff6b6b";
      return;
    }
    localStorage.setItem("usuarioAsistente", nombre);
    localStorage.setItem("cantidadBoletos", cantidad);
    localStorage.setItem("zonaBoletos", zona);

    resultado.textContent = `¡Registro exitoso, ${nombre}! Redirigiendo al inicio...`;
    resultado.style.color = "#51cf66";
    resultado.textContent = `¡Felicidades ${nombre}! Has reservado ${cantidad} boleto(s) para la zona ${zona}. Te contactaremos en ${correo}.`;
    resultado.style.color = "#51cf66";

    setTimeout(()=>{
      window.location.href="index.html"
    })
    formulario.reset();
  });
});