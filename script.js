function timeabcd() {
  let a = new Date();
  hour = String(a.getHours()).padStart(2, 0);
  min = String(a.getMinutes()).padStart(2, 0);
  second = String(a.getSeconds()).padStart(2, 0);

  document.querySelector(".time").textContent =
    hour + " : " + min + " : " + second;
}
setInterval(timeabcd, 1000);

const settings = function () {
  console.log("shchh");
  document.querySelector(".rotate").classList.toggle("down");
};
