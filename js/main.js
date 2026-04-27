// ===== DARK MODE =====
(function(){
  const saved = localStorage.getItem('theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  else if(window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme','dark');
})();

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggle = document.querySelector('.theme-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Mobile nav
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(hamburger && navLinks){
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
