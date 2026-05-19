/* ─── Activity Bars ─── */
function generateBars(id) {
  const container = document.getElementById(id);
  if (!container) return;
  const heights = Array.from({ length: 20 }, () => Math.random() * 80 + 20);
  heights.forEach(h => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = h + '%';
    bar.style.opacity = 0.3 + (h / 100) * 0.7;
    container.appendChild(bar);
  });
}

generateBars('ghBar');
generateBars('liBar');
generateBars('igBar');

/* ─── Scroll Hint ─── */
document.querySelector('.scroll-hint')?.addEventListener('click', () => {
  document.querySelector('.cards-section')?.scrollIntoView({ behavior: 'smooth' });
});

/* ─── Scroll Reveal (cards & skills) ─── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .skills-wrap, .review-form-wrap').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease';
  observer.observe(el);
});

/* ─── Toast ─── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ─── Star Rating ─── */
let selectedRating = 0;

document.querySelectorAll('.star-btn').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    selectedRating = idx + 1;
    updateStars();
  });
  btn.addEventListener('mouseover', () => highlightStars(idx + 1));
  btn.addEventListener('mouseleave', () => updateStars());
});

function highlightStars(n) {
  document.querySelectorAll('.star-btn').forEach((b, i) => {
    b.classList.toggle('active', i < n);
  });
}

function updateStars() {
  document.querySelectorAll('.star-btn').forEach((b, i) => {
    b.classList.toggle('active', i < selectedRating);
  });
}

/* ─── Avatar Colors ─── */
const avatarColors = [
  'linear-gradient(135deg, #e8ff6b, #b2f548)',
  'linear-gradient(135deg, #4fc3f7, #0288d1)',
  'linear-gradient(135deg, #ff6b9d, #e040fb)',
  'linear-gradient(135deg, #69f0ae, #00bfa5)',
  'linear-gradient(135deg, #ffcc02, #ff6d00)',
  'linear-gradient(135deg, #b388ff, #7c4dff)',
];

function getColor(name) {
  let sum = 0;
  for (const ch of name) sum += ch.charCodeAt(0);
  return avatarColors[sum % avatarColors.length];
}
