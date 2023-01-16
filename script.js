const navbar = document.querySelector(`.navbar`);
const hamburgerMenu = document.getElementById(`menu-icon`);
const logo = document.querySelector(`.logo`);
// const logo2 = document.querySelector(`.logo2`);
const header = document.querySelector(`header`);
console.log(header);
hamburgerMenu.addEventListener(`click`, function () {
  navbar.classList.toggle(`active`);
  hamburgerMenu.classList.toggle(`bx-x`);
  header.classList.toggle(`active`);
});

window.addEventListener(`scroll`, function () {
  navbar.classList.remove(`active`);
  hamburgerMenu.classList.remove(`bx-x`);
  header.classList.toggle(`sticky`, window.scrollY > 0);

  if (window.scrollY > 500) {
    // logo.classList.add(`hidden`);
    // logo2.classList.remove(`hidden`);
    logo.innerHTML = `Branko<span> Lukic</span>`;
  } else {
    // logo.classList.remove(`hidden`);
    // logo2.classList.add(`hidden`);

    logo.innerHTML = `Port<span>folio</span>`;
  }
});
