let pageNav = document.querySelector('.page-nav');
let actionsNav = document.querySelector('.actions-nav');
let primaryNav = document.querySelector('.primary-nav');
let bars = document.querySelector('.page-nav .fa-bars');
let times = document.querySelector('.page-nav .fa-times');

const toggleNav = (icon, target) => {
  icon.addEventListener('click', (e) => {
    console.log(`icon: ${icon}. target classList: ${target.classList}`);
    target.classList.toggle('sr-only');
    e.preventDefault();
  });
  // change out bars to closer
  // add border to pageNav
}
// add to page
window.addEventListener('load', () => {
  toggleNav(times, actionsNav);
  // toggleNav(bars, primaryNav);
})