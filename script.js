document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
      const publication = button.closest('.publication');
      publication.classList.toggle('open');
      button.textContent = publication.classList.contains('open') ? '-' : '+';
  });
});
