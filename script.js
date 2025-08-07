function cambiarYTransicionar(ruta) {
    console.log("Click detectado. Redireccionando a:", ruta);

    const colores = ["#FFDDC1", "#C1FFD7", "#D1C1FF", "#FFFAC1", "#CCE5FF"];
    const aleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = aleatorio;

    // Desactivar todos los botones/enlaces para evitar clics múltiples
    const links = document.querySelectorAll('.link-button');
    links.forEach(link => link.style.pointerEvents = "none");

    document.body.classList.add("fade-out");

    setTimeout(() => {
        console.log("Redirigiendo ahora...");
        window.location.href = ruta;
    }, 1000);

    return false;
}
