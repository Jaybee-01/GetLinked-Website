const alert = document.getElementById("alert");
const registerform = document.getElementById("registerform");
const regMeSection = document.getElementById("regMeSection");

registerform.addEventListener("submit", function (event) {
  event.preventDefault();

  alert.style.display = "block";
  regMeSection.style.opacity = "0.1";
  regMeSection.style.pointerEvents = "none";
});

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  alert.style.display = "none";
  // Restore form
  regMeSection.style.opacity = "1";
  regMeSection.style.pointerEvents = "auto";
  registerform.reset();
});
