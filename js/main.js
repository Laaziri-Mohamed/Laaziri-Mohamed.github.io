(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.nav-links');
  function closeMenu(restoreFocus = false) {
    navigation?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation menu');
    if (restoreFocus) menu?.focus();
  }
  menu?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation?.classList.contains('open')) closeMenu(true); });
  document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
  navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) { link.classList.add('active'); link.setAttribute('aria-current', 'page'); }
  });
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const papers = [...document.querySelectorAll('.pub-item[data-type]')];
  if (!papers.length) return;
  const filters = document.querySelector('.filters');
  const label = document.createElement('label');
  label.className = 'search-label';
  label.textContent = 'Search publications';
  const search = document.createElement('input');
  search.type = 'search'; search.className = 'publication-search'; search.placeholder = 'Title, author, method, or keyword…';
  label.append(search); filters.before(label);
  const status = document.createElement('p');
  status.className = 'filter-status'; status.setAttribute('role', 'status');
  filters.after(status);
  let category = 'all';
  const contents = papers.map(paper => paper.textContent.toLocaleLowerCase());
  function update() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    papers.forEach((paper, index) => {
      paper.hidden = !((category === 'all' || paper.dataset.type === category) && contents[index].includes(query));
      if (!paper.hidden) count++;
    });
    document.querySelectorAll('.pub-year').forEach(year => {
      const list = year.nextElementSibling;
      const empty = ![...list.querySelectorAll('.pub-item')].some(paper => !paper.hidden);
      year.hidden = empty; list.hidden = empty;
    });
    status.textContent = count ? `${count} publication${count === 1 ? '' : 's'}` : 'No matching publications. Try another keyword or select All.';
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    update();
  }));
  search.addEventListener('input', update);
  update();
})();
