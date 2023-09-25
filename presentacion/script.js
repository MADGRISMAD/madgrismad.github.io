let currentSlide = 1;
const totalSlides = 5; 

document.getElementById('nextSlide').addEventListener('click', function() {
    if (currentSlide < totalSlides) {
        let slideOut = document.getElementById('slide' + currentSlide);
        currentSlide++;
        let slideIn = document.getElementById('slide' + currentSlide);

        slideOut.style.left = '-100%';
        slideIn.style.left = '0';
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Fin de la presentación',
            text: 'Has llegado al final de las diapositivas.',
            confirmButtonText: 'Entendido'
        });
    }
});

document.getElementById('previousSlide').addEventListener('click', function() {
    if (currentSlide > 1) {
        let slideOut = document.getElementById('slide' + currentSlide);
        currentSlide--;
        let slideIn = document.getElementById('slide' + currentSlide);

        slideOut.style.left = '100%';
        slideIn.style.left = '0';
    }
});

document.getElementById('resetSlide').addEventListener('click', function() {
    let slideOut = document.getElementById('slide' + currentSlide);
    currentSlide = 1;
    let slideIn = document.getElementById('slide1');

    slideOut.style.left = '100%';
    slideIn.style.left = '0';
});
