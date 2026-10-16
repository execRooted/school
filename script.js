/* ============ Typewriter effect (loop) ============ */
const text = "Glosar TIC - Termeni esentiali ai technologiei";
const el = document.getElementById('typewriter');

if (window.matchMedia('(min-width: 641px)').matches) {
  el.textContent = '';
  let i = 0;
  let isDeleting = false;

  const typeSpeed = 90;
  const deleteSpeed = 60;
  const pauseAtEnd = 2200;
  const pauseAtStart = 1500;

  function typeLoop() {
    const current = text.substring(0, i);
    el.textContent = current;
    el.style.transform = 'none';
    el.style.opacity = '1';

    if (!isDeleting && i < text.length) {
      i++;
      setTimeout(typeLoop, typeSpeed);
    } else if (!isDeleting && i === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, pauseAtEnd);
    } else if (isDeleting && i > 0) {
      i--;
      setTimeout(typeLoop, deleteSpeed);
    } else if (isDeleting && i === 0) {
      isDeleting = false;
      setTimeout(typeLoop, pauseAtStart);
    }
  }

  setTimeout(typeLoop, 700);
} else {
  el.textContent = text;
}

/* ============ Back to top button ============ */
const btn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > 400);
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============ Mobile menu toggle ============ */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
