// For the mobile nav
const menu = document.getElementById("menu-bar");
const mobileNav = document.getElementById("mobileNav");
const links = mobileNav.querySelectorAll("a");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

links.forEach((link) => {
  link.onclick = () => {
    // mobileNav.style.display = "none";
    menu.classList.remove("active");
    mobileNav.classList.remove("active");
  };
});

// For the FAQs
const btnShow = document.getElementById("btnShow");
const btnHide = document.getElementById("btnHide");

btnShow.onclick = () => {
  const items = document.querySelectorAll(".itemShow");
  items.forEach((item) => {
    item.style.display = "block";
  });
};

btnHide.onclick = () => {
  const items = document.querySelectorAll(".itemShow");
  items.forEach((item) => {
    item.style.display = "none";
  });
};

// const btnShow = document.addEventListener(onclick);
