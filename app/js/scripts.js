var tabs = document.querySelectorAll("nav a");

tabs.forEach((tab) => tab.addEventListener("click", makeActive));

function makeActive(event) {
  makeInactive();
  event.target.classList.add("active");
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}
