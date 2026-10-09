const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && preferredDark)) {
  root.setAttribute('data-theme', 'dark');
}

toggle.addEventListener('click', () => {
  const dark = root.getAttribute('data-theme') === 'dark';
  if (dark) root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', dark ? 'light' : 'dark');
});

const filters = [...document.querySelectorAll('.filter')];
const publications = [...document.querySelectorAll('.publication')];
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const value = button.dataset.filter;
    publications.forEach(pub => {
      pub.hidden = value !== 'all' && pub.dataset.year !== value;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
