let pageNav = document.querySelector(".page-nav");
let actionsNav = document.querySelector(".actions-nav");
let primaryNav = document.querySelector(".primary-nav");
let primaryBars = document.querySelectorAll(".page-nav .fa-bars")[1];
let times = document.querySelector(".page-nav .fa-times");
let dropdownAngle = document.querySelectorAll(".page-nav .fa-angle-right");

const toggleNav = (target) => {
  target.style.display = target.style.display === "none" ? "" : "block";
};

const switchIcon = (iconClass, newIconClass) => {
  let currentIcon = event.srcElement;
  currentIcon.classList.remove(iconClass);
  currentIcon.classList.add(newIconClass);
};

primaryBars.addEventListener("click", () => {
  toggleNav(primaryNav);
  switchIcon("fa-bars", "fa-times");
});

if (times) {
  times.addEventListener('click', () => {
    toggleNav(primaryNav);
    switchIcon('fa-times', 'fa-bars');
  });
}
for (let angle of dropdownAngle) {
  angle.addEventListener("click", () => {
    if (angle.classList.contains("fa-angle-right")) {
      switchIcon("fa-angle-right", "fa-angle-down");
    } else {
      switchIcon("fa-angle-down", "fa-angle-right");
    }
  });
}
