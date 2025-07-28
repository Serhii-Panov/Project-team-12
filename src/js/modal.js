document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button-join');
  const modals = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('[data-menu-close]');

  // Open the right modal when a button is clicked
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const packageId = button.dataset.package;

      // Hide all modals first
      modals.forEach(modal => modal.classList.remove('is-open'));

      // Show the modal that matches the package
      const targetModal = document.querySelector(`.modal-overlay[data-modal="${packageId}"]`);
      if (targetModal) {
        targetModal.classList.add('is-open');
        document.body.classList.add('scroll-lock'); // optional scroll lock
      }
    });
  });

  // Close modal on close button click
  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal-overlay');
      modal.classList.remove('is-open');
      document.body.classList.remove('scroll-lock');
    });
  });

  // Close modal on backdrop click
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.classList.remove('scroll-lock');
      }
    });
  });
});