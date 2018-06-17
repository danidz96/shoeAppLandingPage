function showNav() {
    var x = document.querySelector("#responsive-nav");
    x.classList.toggle('unfold');
}

window.sr = ScrollReveal();
sr.reveal('#header img.phone', {
    duration: 300,
    origin: 'bottom',
    distance: '200px'
});

sr.reveal('#features div.car', {
    delay: 200,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.shoe', {
    delay: 400,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.device', {
    delay: 600,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#discount .offer', {
    delay: 500,
    duration: 300,
    origin: 'right',
    distance: '200px'
});

sr.reveal('#discount img', {
    delay: 500,
    duration: 300,
    origin: 'left',
    distance: '200px'
});