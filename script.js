// Elements
const time_container = document.querySelector(".time");

function timeabcd() {
  let date = new Date();
  hour = String(date.getHours()).padStart(2, 0);
  min = String(date.getMinutes()).padStart(2, 0);
  second = String(date.getSeconds()).padStart(2, 0);

  time_container.textContent = hour + " : " + min + " : " + second;
}
setInterval(timeabcd, 1000);

const settings = function () {
  console.log("shchh");
  document.querySelector(".rotate").classList.toggle("down");
};
