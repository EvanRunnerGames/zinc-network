// Create the cloud element
const cloud = document.createElement("div");
cloud.id = "hover-cloud";
cloud.textContent = "du_one said from the heavens BUY MVP++ lol";

// Style the cloud
Object.assign(cloud.style, {
  position: "fixed",
  pointerEvents: "none",
  background: "black",
  color: "white",
  padding: "10px 15px",
  borderRadius: "16px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
  opacity: "0",
  transform: "translate(-50%, -50%)",
  transition: "opacity 0.2s ease",
  fontFamily: "sans-serif",
  fontSize: "13px",
  zIndex: "9999",
});
document.body.appendChild(cloud);

// Mouse tracking with delay
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const verticalOffset = -20; // 20px above the cursor

// Smooth follow animation
function animate() {
  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY + verticalOffset - currentY) * 0.05;
  cloud.style.left = currentX + "px";
  cloud.style.top = currentY + "px";
  requestAnimationFrame(animate);
}
animate();

// Update target position from mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Attach hover effect to existing element
const target = document.getElementById("mvp-plus-card");
if (target) {
  target.addEventListener("mouseenter", () => {
    cloud.style.opacity = "1";
  });
  target.addEventListener("mouseleave", () => {
    cloud.style.opacity = "0";
  });
}
