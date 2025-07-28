(() => {
  const openBtn = document.querySelector(".header-button-menu");
  const closeBtn = document.querySelector(".modal-close-btn");
  const menuBackdrop = document.querySelector(".modal-backdrop");

  const toggleMenu = () => {
    menuBackdrop.classList.toggle("is-open");
    document.body.style.overflow = menuBackdrop.classList.contains("is-open") ? "hidden" : "";
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  // Optional: click on backdrop to close menu
  menuBackdrop.addEventListener("click", (e) => {
    if (e.target === menuBackdrop) toggleMenu();
  });
})();
