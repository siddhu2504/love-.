function celebrate() {
    // Confetti effect
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = '#ff1493';
        confetti.style.opacity = '0.8';
        confetti.style.animation = 'confetti 2s forwards';
        document.body.appendChild(confetti);

        // Animation for confetti
        confetti.style.animation = `confetti 2s forwards`;

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Keyframe for confetti animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule('@keyframes confetti { 0% { transform: translateY(0); } 100% { transform: translateY(1000px) rotate(720deg); opacity: 0; } }', styleSheet.cssRules.length);