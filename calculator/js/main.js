"use strict";

const num = document.querySelectorAll(".btn");
const act = document.querySelectorAll(".act");
const equal = document.querySelector(".equal");
const input = document.getElementById("input");

let op = "+";
let numValue = 0;

num.forEach(function (item) {
  item.addEventListener("click", function () {
    input.value += this.innerHTML;
  });
});

act.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentOp = this.innerHTML;
    calc(currentOp);
  });
});

function plus(a, b) {
  numValue = +a + +b;
  return numValue;
}
function minus(a, b) {
  numValue = a - b;
  return numValue;
}
function multiply(a, b) {
  numValue = a * b;
  return numValue;
}
function divide(a, b) {
  numValue = a / b;
  return numValue;
}

function calc(currentOp) {
  switch (op) {
    case "+":
      // debugger;
      plus(numValue, input.value);
      break;
    case "-":
      minus(numValue, input.value);
      break;
    case "x":
      multiply(numValue, input.value);
      break;
    case "÷":
      divide(numValue, input.value);
      break;
    default:
      break;
  }
  op = currentOp;
  input.value = "";
}

equal.addEventListener("click", function () {
  calc("+");
  input.value = numValue;
  numValue = 0;
});

clear.addEventListener("click", function () {
  input.value = "";
  numValue = 0;
  op = "+";
});
