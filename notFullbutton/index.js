function myFunction(operator) {
  let hasil = 0.0;
  let x = parseFloat(document.getElementById("bilangan1").value);
  let y = parseFloat(document.getElementById("bilangan2").value);
  //   document.getElementById("demo").textContent = x;
  //   document.getElementById("demo").textContent = y;
  console.log(x + " " + y);
  switch (operator) {
    case "+":
      hasil = x + y;
      break;
    case "-":
      hasil = x - y;
      break;
    case "*":
      hasil = x * y;
      break;
    case "/":
      hasil = x / y;
      break;
    default:
      break;
  }
  document.getElementById("hasil").textContent = "Hasil : " + hasil;
}
