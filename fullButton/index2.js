let value = "";
let alreadyCalculate = false;

function addDisplay(operan) {
  if (alreadyCalculate == true) {
    value = "";
    alreadyCalculate = false;
  }
  value += operan;
  document.getElementById("display").value = value;
  // console.log(value);
}

function clearDisplay() {
  value = "";
  document.getElementById("display").value = value;
}

function calculate() {
  let hasil = math.evaluate(value);
  document.getElementById("display").value = hasil;
  alreadyCalculate = true;
}
