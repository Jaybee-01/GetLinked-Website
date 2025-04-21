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
