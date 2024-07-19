const asideTimes = document.querySelectorAll(".aside__time .aside__item");
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const clearActive = () => {
  asideTimes.forEach((item) => item.classList.remove("active"));
};
const initTime = () => {
  const date = new Date();
  const day = DAYS[(date.getDay() + 1) % DAYS.length];
  clearActive();
  document
    .querySelector(`.aside__item[data-day="${day}"]`)
    .classList.add("active");
};
initTime();
setInterval(() => {
  initTime();
}, 60000);
