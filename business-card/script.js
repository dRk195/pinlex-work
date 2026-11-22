// Шапка при прокрутке
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll);
onScroll();

// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  nav.classList.remove('open');
}));

// Анимация счётчиков
const animateCount = el => {
  const target = +el.dataset.count;
  const duration = 1500;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// Появление элементов при прокрутке
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    const counter = entry.target.querySelector('[data-count]');
    if (counter) animateCount(counter);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Форма
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Спасибо! Ваша заявка отправлена.';
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
