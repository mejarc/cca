let pageNav = document.querySelector(".page-nav");
let actionsNav = document.querySelector(".actions-nav");
let menuTriggers = document.querySelectorAll(".menu-trigger");

// icon that shows only in mobile view
let pageNavCloser = document.getElementById("pageNavCloser");
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
    e.preventDefault();
    link.classList.toggle("open");
    if (submenu) {
      submenu.classList.toggle("visible");
    }
  });
}
