let pageNav = document.querySelector(".page-nav");
let actionsNav = document.querySelector(".actions-nav");
let primaryNav = document.querySelector(".primary-nav");
let menuTriggers = document.querySelectorAll(".menu-trigger");

// icon that shows only in mobile view
let pageNavCloser = document.getElementById("pageNavCloser");

// icons that only show in mobile and tablet views
let primaryCloser = document.getElementById("primaryNavCloser");
let dropdownAngle = document.querySelectorAll(".page-nav .fa-angle-right");

const toggleNav = (target, container) => {
  target.classList.toggle("visible");
  if (container) {
    document.querySelector(container).classList.toggle("bordered");
  }
};

pageNavCloser.addEventListener("click", () => {
  toggleNav(actionsNav, "#pageNavContainer");
  toggleNav(primaryNav, null);
  pageNavCloser.classList.toggle("fa-times");
});


for (let link of menuTriggers) {
  let submenu = link.parentElement.querySelector(".submenu");
  link.addEventListener("click", (e) => {
    // how to hover menu on mobile??? 
    e.preventDefault();
    link.classList.toggle("open");
    if (submenu) {
      submenu.classList.toggle("visible");
    }
  });
}
