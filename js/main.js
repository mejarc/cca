let pageNav = document.querySelector(".page-nav");
// icons that only show in mobile view
// let pageNavBars = document.querySelectorAll('.page-nav .fa-bars')[0];
let pageNavCloser = document.getElementById("pageNavCloser");

let actionsNav = document.querySelector(".actions-nav");
let primaryNav = document.querySelector(".primary-nav");

// icons that only show in mobile and tablet views
// let primaryBars = document.querySelectorAll('.page-nav .fa-bars')[1];
let primaryCloser = document.getElementById("primaryNavCloser");
let dropdownAngle = document.querySelectorAll(".page-nav .fa-angle-right");

const toggleNav = (target) => {
  target.classList.toggle('visible');
};

const switchIcon = (iconClass, newIconClass) => {
  let currentIcon = event.srcElement;
  currentIcon.classList.replace(iconClass, newIconClass);
};

primaryNavCloser.addEventListener("click", () => {
  toggleNav(primaryNav);
  primaryNavCloser.classList.toggle('fa-times');
});

pageNavCloser.addEventListener("click", () => {
  toggleNav(pageNav);
  switchIcon("fa-bars", "fa-times");
});

for (let angle of dropdownAngle) {
  let submenu = angle.parentElement.querySelector('.submenu');
  console.log(submenu);

  angle.addEventListener("click", () => {
    if (angle.classList.contains("fa-angle-right")) {
      switchIcon("fa-angle-right", "fa-angle-down");
    } else {
      switchIcon("fa-angle-down", "fa-angle-right");
    }
    submenu.classList.toggle('visible');
  });

}
