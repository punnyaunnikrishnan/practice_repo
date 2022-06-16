let counter = document.getElementById("counter");
// console.log(counter);
// let buttons = document.getElementsByClassName("btn");
// console.log(buttons);
let incbutton = document.getElementById("inc-button");
let decbutton = document.getElementById("dec-button");
incbutton.addEventListener("click", function () {
  console.log("button clicked!");
  let val = parseInt(counter.innerText);
  val += 1;
  counter.innerText = val;
});
decbutton.addEventListener("click", function () {
  console.log("button clicked!");
  let value = parseInt(counter.innerText);
  value -= 1;
  counter.innerText = value;
});
