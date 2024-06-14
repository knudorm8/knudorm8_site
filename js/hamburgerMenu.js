const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamburger.classList.toggle("active");
  renderPopup();
}

function renderPopup() {
  popup.innerHTML = "";
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

// Select all dropdown headers
const dropdownHeaders = document.querySelectorAll(".navigationPanel__navigationContainer__navigationMenu__dropdown__headerContainer");

// Add event listener for each dropdown header
dropdownHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const dropdownMenu = header.nextElementSibling;
    const arrow = header.querySelector(".navigationPanel__navigationContainer__navigationMenu__dropdown__header__arrow");

    // Close all open dropdowns except the one being clicked
    dropdownHeaders.forEach(otherHeader => {
      if (otherHeader !== header) {
        const otherDropdownMenu = otherHeader.nextElementSibling;
        const otherArrow = otherHeader.querySelector(".navigationPanel__navigationContainer__navigationMenu__dropdown__header__arrow");
        otherDropdownMenu.classList.remove("open");
        otherArrow.classList.remove("open");
      }
    });

    // Toggle open/close the clicked dropdown
    dropdownMenu.classList.toggle("open");
    arrow.classList.toggle("open");
  });

  // Add event listener for each link inside dropdown menu
  const links = header.nextElementSibling.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      // Close all dropdowns
      dropdownHeaders.forEach(header => {
        const dropdownMenu = header.nextElementSibling;
        const arrow = header.querySelector(".navigationPanel__navigationContainer__navigationMenu__dropdown__header__arrow");
        dropdownMenu.classList.remove("open");
        arrow.classList.remove("open");
      });
    });
  });
});
