let calcInput = document.getElementById("vvod");
const regExp = /[\d,+,\/,\-,*,.]/;

const forbidden = [
  18,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123
];
function proverka(event) {
  console.log("INDEX OF", forbidden.indexOf(event.keyCode));

  console.log(regExp.test(event.key));
  event.preventDefault();

  switch (event.keyCode) {
    case 13:
    case 187:
      calc(event);
      break;
    case 8:
      calcInput.value = calcInput.value.slice(0, calcInput.value.length - 1);
      break;
    case 46:
      calcInput.value = " ";
      break;
  }
  switch (event.key) {
    case "s":
      calcInput += "sin(";
    case "c":
      calcInput += "cos(";
    case "t":
      calcInput += "tan(";
    case "C":
      calcInput += "ctg(";
  }
  if (
    !forbidden.indexOf(event.keyCode) ||
    forbidden.indexOf(event.keyCode) === -1
  ) {
    if (regExp.test(event.key)) {
      putValue(event.key);
    }
  }
}

function calc(event) {
  calcInput.value = eval(calcInput.value);
}
let Timeless = calcInput;
function putValue(value) {
  switch (value) {
    case "C":
      calcInput.value = "";
      break;
    case "=":
      calc(event);
      break;

    default:
      calcInput.value += value;

      break;
  }

  Timeless = calcInput.value;
}


const buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button, index) => {
  if (!button.classList.contains("_")) {
    button.addEventListener("click", () => putValue(event.target.id));
  }
});
