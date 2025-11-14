document.addEventListener('DOMContentLoaded', () => {
  // Fade out intro
  setTimeout(() => {
    document.getElementById('intro').classList.add('fadeOut');
  }, 3000);

  const links = document.querySelectorAll('.navbar a, .overlay-links a');
  const sections = document.querySelectorAll('.page-section');
  const overlay = document.getElementById('overlay-menu');
  const hamburger = document.getElementById('hamburger');

  function showOnly(id) {
    sections.forEach(section => section.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showOnly(targetId);
      overlay.classList.remove('active'); // Close overlay after selection
    });
  });

  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('active');
  });

  showOnly('about'); // default section

  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    clock.innerHTML = `${date} — ${h}<span id="colon">:</span>${m}`;
  }

  updateClock();
  setInterval(updateClock, 2000);
  setInterval(() => {
    const colon = document.getElementById('colon');
    if (colon) colon.classList.toggle('blink');
  }, 1000);
});



document.addEventListener("DOMContentLoaded", () => {
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  let input = [];

  window.addEventListener("keydown", (e) => {
    input.push(e.key);
    if (input.length > konamiCode.length) {
      input.shift();
    }

    if (input.join() === konamiCode.join()) {
      window.location.href = "uhhh.html";
      input = []; // reset after triggering
    }
  });
});
