// Inisialisasi tooltip
document.querySelectorAll('.threat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.threat-glow').style.animation = 'pulse 0.5s infinite alternate';
    });
});