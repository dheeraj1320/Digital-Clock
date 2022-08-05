// Elements
const months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let format24hr = true;

// utility functions
updateTime = function () {
  let date = new Date();
  let hour = date.getHours();
  let min = String(date.getMinutes()).padStart(2, 0);
  let second = String(date.getSeconds()).padStart(2, 0);

  // document.querySelector(".time").textContent = `${hour}  : ${min} : ${second}`;

  if (!format24hr) hour = hour % 12;

  hour = String(hour).padStart(2, 0);

  document.querySelector(".hour").textContent = hour;
  document.querySelector(".min").textContent = min;
  document.querySelector(".sec").textContent = second;
  blink();
};

blink = function () {
  document
    .querySelectorAll(".dots")
    .forEach((a) => a.classList.toggle("hidden"));
};
setInterval(updateTime, 1000);

updateDate = function () {
  let date = new Date();
  let dateNo = date.getDate();
  let dayNo = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  document.querySelector(".date").textContent = `${day[dayNo]}, ${dateNo} ${
    months[month - 1]
  }, ${year}`;
};
setInterval(updateDate, 1000);

const settings = function () {
  document.querySelector(".rotate").classList.toggle("down");
  document.querySelector(".setting-drawer").classList.toggle("show");
};

const changeFormat = function () {
  const format = format24hr ? "24hr" : "12hr";
  format24hr = !format24hr;
  settings();
  setTimeout(function () {
    document.querySelector(".setting-drawer").textContent = format;
  }, 500);
};
