// toggle icon
const eventFormCloser = document.getElementById("eventFormCloser");
const eventForm = document.getElementById("eventForm");

const toggleEventForm = () => {
  eventForm.classList.toggle("sr-only");
};
if (eventFormCloser) {
  eventFormCloser.addEventListener("click", (e) => {
    e.preventDefault();
    // show event types form
    toggleEventForm();
    // toggle icon
    eventFormCloser.classList.toggle("fa-angle-right");
  });  
}
