document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// 2. Partículas que siguen al mouse o al dedo (en móviles)
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Centramos la partícula debajo de la flecha del mouse
    particle.style.left = (x - 4) + 'px';
    particle.style.top = (y - 4) + 'px';

    // Colores de la paleta del fondo para que combinen perfecto
    const colors = ['#ff758c', '#ff7eb3', '#8f94fb', '#ffffff'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

document.addEventListener('mousemove', (e) => createParticle(e.clientX, e.clientY));
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) createParticle(e.touches[0].clientX, e.touches[0].clientY);
});

// 3. Funcionalidad del Botón de repetir
const repeatBtn = document.getElementById('repeat-btn');
if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Espera un momento a que suba y luego recarga para reiniciar toda la animación
        setTimeout(() => location.reload(), 600);
    });
}

// 4. Modal de mensaje oculto
const secretBtn = document.getElementById('secret-btn');
const secretModal = document.getElementById('secret-modal');
const closeModal = document.getElementById('close-modal');

if (secretBtn && secretModal && closeModal) {
    secretBtn.addEventListener('click', () => {
        secretModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        secretModal.classList.remove('show');
    });

    // Cerrar el modal al hacer clic en el fondo oscuro
    secretModal.addEventListener('click', (e) => {
        if (e.target === secretModal) {
            secretModal.classList.remove('show');
        }
    });
}