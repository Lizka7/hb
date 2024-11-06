document.getElementById("gift").addEventListener("click", showSurprise);

function showSurprise() {
  const image = document.querySelector('.surprise-image');
  const confettiCanvas = document.getElementById('confettiCanvas');

  // Show the image and canvas
  image.style.display = 'block';
  confettiCanvas.style.display = 'block';

  // Start confetti animation
  startConfetti();
}

function startConfetti() {
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiContext = confettiCanvas.getContext('2d');
  
  // Example confetti logic: generate simple confetti
  let confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 5 + 2,
      speedY: Math.random() * 3 + 2
    });
  }

  function drawConfetti() {
    confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach(particle => {
      confettiContext.fillStyle = particle.color;
      confettiContext.beginPath();
      confettiContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      confettiContext.fill();

      // Update particle position
      particle.y += particle.speedY;
      if (particle.y > confettiCanvas.height) particle.y = 0;
    });
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}
