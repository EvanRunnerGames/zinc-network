window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('statsCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];

    function spawnParticle() {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 10,
            radius: (Math.random() * 2 + 1) * 1.2, // 1.2x size
            speed: (Math.random() * 1 + 0.5) * 1.275, // 1.7x reduced by 25%
            alpha: 1,
            wobbleOffset: Math.random() * 100,
            wobbleSpeed: Math.random() * 0.05 + 0.02
        });
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.y -= p.speed;
            p.x += Math.sin(p.wobbleOffset) * 0.5;
            p.wobbleOffset += p.wobbleSpeed;

            p.alpha -= 0.005;
            if (p.alpha <= 0 || p.y < -p.radius) {
                particles.splice(i, 1);
            }
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();
        }
    }

    function animate() {
        if (particles.length < 200) {
            spawnParticle();
            spawnParticle();
        }
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    animate();
});
