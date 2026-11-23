// Small, dependency-free behaviors. Safe for GitHub Pages and local previews.
(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if (menuButton && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); };
    menuButton.addEventListener('click', () => {
      const opened = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(opened));
      menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('is-selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    projects.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
  }));
  // Motion is entirely optional; content remains visible without JavaScript.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .06, rootMargin: '0px 0px -15px 0px' });
    document.querySelectorAll('.reveal').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
  }
})();

// Topic pages also work as ordinary links when JavaScript is unavailable.
(() => {
  const openDialog = (dialog, trigger) => {
    if (!dialog || typeof dialog.showModal !== 'function') return false;
    dialog.returnFocus = trigger;
    dialog.showModal();
    document.documentElement.classList.add('dialog-open');
    return true;
  };
  document.querySelectorAll('[data-topic]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (openDialog(document.getElementById(`dialog-${link.dataset.topic}`), link)) event.preventDefault();
    });
  });
  const photoDialog = document.querySelector('.photo-dialog');
  document.querySelectorAll('[data-photo]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !photoDialog) return;
    const image = photoDialog.querySelector('img');
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    if (openDialog(photoDialog, link)) event.preventDefault();
  }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('dialog-open');
      dialog.returnFocus?.focus();
    });
  });
  document.querySelectorAll('.work-carousel').forEach(carousel => {
    const slides = [...carousel.querySelectorAll('.carousel-slide')];
    const controls = carousel.querySelector('.carousel-controls');
    let current = 0;
    const show = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== current; });
      carousel.querySelector('.carousel-position').textContent = `${current + 1} / ${slides.length}`;
    };
    controls.hidden = false;
    controls.querySelectorAll('[data-slide]').forEach(button => button.addEventListener('click', () => show(current + Number(button.dataset.slide))));
    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        show(current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    show(0);
  });
})();
