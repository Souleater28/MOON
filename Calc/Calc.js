let calcInput = document.getElementById("vvod");
let inpValue;
function val() {
  inpValue = calcInput.value;
  console.log(inpValue);
}
// function proverka(input) {
//   var regExp = /[0-9]/;
//   console.log(regExp.test(calcInput.value));
// }
function vivod(inpValue) {
  calcInput.innerHTML += inpValue;
}
function calc(event) {
  inpValue = eval(inpValue);
  vivod(inpValue);
}
function number(event) {}

const buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((item, index) => {
  if (!item.classList.contains("_")) {
    item.addEventListener("click", () => num(event));
  }
});
