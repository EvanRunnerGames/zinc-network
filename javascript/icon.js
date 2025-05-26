window.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("stats_img");

    let start = null;
    const duration = 1000;

    function animate(timestamp) {
        if (!start) start = timestamp;
        const elapsed = (timestamp - start) % duration;
        const t = elapsed / (duration / 2);

        const scale = t <= 1 ? t : 2 - t;

        const width = 220 + scale * 10;
        const height = 210 + scale * 10;

        img.style.width = `${width}px`;
        img.style.height = `${height}px`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
