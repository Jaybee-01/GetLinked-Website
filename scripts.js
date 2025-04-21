const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const mobileNav = (document.getElementById(
    "mobile-nav"
  ).textContent.style.display = "block");
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
