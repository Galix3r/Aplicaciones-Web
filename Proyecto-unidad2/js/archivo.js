const formulario=document.querySelector("form");
formulario.addEventListener("submit",function(e){
e.preventDefault();

alert("Registro exitoso ");

window.location.href = "../html/PaguinaPrincipal.html";
});