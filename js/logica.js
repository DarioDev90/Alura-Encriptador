/* ===== Loader =====*/
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".container-loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
});

function focus() {
  let input = document.getElementById("input-texto");
  input.focus();
}

function value() {
  let input = document.getElementById("input-texto");
  input.value = "";
}

function encriptar() {
  let texto = document.getElementById("input-texto").value;
  let textoCifrado = texto.replace(/e/gm, "enter");
  textoCifrado = textoCifrado.replace(/o/gm, "ober");
  textoCifrado = textoCifrado.replace(/i/gm, "imes");
  textoCifrado = textoCifrado.replace(/a/gm, "ai");
  textoCifrado = textoCifrado.replace(/u/gm, "ufat");

  if (/[^a-zñ ]/.test(texto)) {
    Swal.fire({
      icon: "error",
      iconColor: "#B9AB9C",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#B9AB9C",
      text: "Solo se permiten letras minúsculas y sin acentos",
    });
  } else if (texto.length === 0) {
    Swal.fire({
      icon: "error",
      iconColor: "#B9AB9C",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#B9AB9C",
      text: "El campo de texto está vacio, escriba el texto que desea encriptar",
    });
  } else {
    document.getElementById("texto-primary").style.display = "none";
    document.getElementById("texto-secondary").style.display = "none";
    document.getElementById("output-texto").style.display = "inline-block";
    document.getElementById("output-texto").innerHTML = textoCifrado;

    value();
  }
}

function desencriptar() {
  let texto = document.getElementById("input-texto").value;
  let textoCifrado = texto.replace(/enter/gm, "e");
  textoCifrado = textoCifrado.replace(/ober/gm, "o");
  textoCifrado = textoCifrado.replace(/imes/gm, "i");
  textoCifrado = textoCifrado.replace(/ai/gm, "a");
  textoCifrado = textoCifrado.replace(/ufat/gm, "u");

  if (texto.length === 0) {
    Swal.fire({
      icon: "error",
      iconColor: "#B9AB9C",
      background: "#E3E0DE",
      title: "Oops...",
      confirmButtonColor: "#B9AB9C",
      text: "El campo de texto está vacio, escriba el texto que desea desencriptar",
    });
  } else {
    document.getElementById("texto-primary").style.display = "none";
    document.getElementById("texto-secondary").style.display = "none";
    document.getElementById("output-texto").style.display = "inline-block";
    document.getElementById("output-texto").innerHTML = textoCifrado;

    value();
  }
}

function copiar() {
  let textoCopiado = document.querySelector("#output-texto");
  textoCopiado.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    iconColor: "#b9ab9c",
    background: "#E3E0DE",
    title: "¡Excelente!",
    confirmButtonColor: "#b9ab9c",
    text: "Texto copiado con Exito",
  });
  document.getElementById("texto-primary").style.display = "block";
  document.getElementById("texto-secondary").style.display = "block";
  document.getElementById("output-texto").style.display = "none";
}

focus();
value();
