(() => {
  const dialog = document.querySelector('.case-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let previousOverflow = '';
  document.querySelectorAll('[data-project-image]').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.projectImage;
      image.alt = button.querySelector('img').alt;
      caption.textContent = button.closest('figure').querySelector('figcaption').innerText.replace(/\s*\n+\s*/g, ' · ');
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
})();
