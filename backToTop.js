const backToTop = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // Mostrar el botón
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
  } else {
    // Ocultar el botón
    backToTop.style.opacity = "0";
    this.setTimeout(function () {
      backToTop.style.display = "none";
    }, 300);
  }
});