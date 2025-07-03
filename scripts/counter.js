const plusBtn = document.getElementById("trip-plus");
const minusBtn = document.getElementById("trip-minus");
const counter = document.getElementById("trip-counter");

let count = 1;

plusBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count--;
    counter.innerText = count;
  }
});