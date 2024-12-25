// Tạo hiệu ứng particles
const particles = document.getElementById("background-particles");
particles.style.position = "fixed";
particles.style.top = 0;
particles.style.left = 0;
particles.style.width = "100%";
particles.style.height = "100%";
particles.style.zIndex = "-1";
particles.style.background = "radial-gradient(circle, #ff7e5f, #feb47b)";

// Tạo hiệu ứng logo bằng Python (canvas)
const canvas = document.getElementById("python-logo");
const ctx = canvas.getContext("2d");
canvas.width = 100;
canvas.height = 100;

function drawPythonLogo() {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#306998");
  gradient.addColorStop(1, "#FFD43B");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI * 2);
  ctx.fill();
}

drawPythonLogo();