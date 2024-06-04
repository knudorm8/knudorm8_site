const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamburger.classList.toggle("active");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  menu.classList.toggle("open");

  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      popup.classList.remove("open");
      hamburger.classList.remove("active");
      menu.classList.remove("open");
    });
  });
}
