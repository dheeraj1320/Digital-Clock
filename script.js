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

function updateTime() {
  let date = new Date();
  let hour = String(date.getHours()).padStart(2, 0);
  let min = String(date.getMinutes()).padStart(2, 0);
  let second = String(date.getSeconds()).padStart(2, 0);

  document.querySelector(".time").textContent = `${hour}  : ${min} : ${second}`;
}
setInterval(updateTime, 1000);

function updateDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  document.querySelector(".date").textContent = `${day}  - ${
    months[month - 1]
  } - ${year}`;
  console.log(day, month, year);
}
setInterval(updateDate, 1000);

const settings = function () {
  document.querySelector(".rotate").classList.toggle("down");
};
