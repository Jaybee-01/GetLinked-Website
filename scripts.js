const hamburger = document.getElementById("hamburger");
const closeHamburger = document.getElementById("closeHamburger");
const mobileNav = document.getElementById("mobileNav");
const navLinks = mobileNav.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
});

navLinks.forEach((link) => {
  link.onclick = () => {
    mobileNav.style.display = "none";
  };
});

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
