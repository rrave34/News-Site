document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenuOpenButton = document.querySelector(".hamburger-menu-open");
  const hamburgerMenuCloseButton = document.querySelector(".close-icon");
  const mobileMenu = document.querySelector(".hamburger-menu-wrapper");

  hamburgerMenuOpenButton.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });


  hamburgerMenuCloseButton.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
