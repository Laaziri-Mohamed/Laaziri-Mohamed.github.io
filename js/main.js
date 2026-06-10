(function () {
  const storageKey = "ml-site-theme";

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(storageKey, theme); } catch (e) {}
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(storageKey); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"));
  }

  function initNav() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === current || (current === "" && href === "index.html")) link.classList.add("active");
    });
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }
  }

  function initThemeToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  function initFadeIn() {
    const els = document.querySelectorAll(".fade-in");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => observer.observe(el));
  }

  function initPublicationFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const pubs = document.querySelectorAll(".pub-item[data-type]");
    if (!buttons.length || !pubs.length) return;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        pubs.forEach((pub) => {
          pub.style.display = filter === "all" || pub.dataset.type === filter ? "block" : "none";
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initThemeToggle();
    initFadeIn();
    initPublicationFilters();
  });
})();
