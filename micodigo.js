function detectartecla(evento) {
        
  var elemento = document.getElementById("mainPrincipal");
  var codigo = evento.key;
    switch (codigo) {
      case "0":
        elemento.style.color="#990000";
        break;
      case "1":
        elemento.style.color="#009900";
        break;
      case "2":
        elemento.style.color="#999900";
        break;
    }
}  
window.addEventListener ("keydown",detectartecla);