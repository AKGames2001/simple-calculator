var current_calculation = [];
let num = "";
let currentString = "";
let nextCalculation = false;

let displayCurrent = document.getElementById("calculator-display-current");
let displayOutput = document.getElementById("calculator-display-output");

function appendNum(n) {
  if (nextCalculation) {
    clearAll();
    nextCalculation = false;
  }
  num += n.toString();
  displayOutput.innerHTML += n.toString();
}

function appendFunction(fun) {
  displayCurrent.innerHTML += num;
  current_calculation.push(num);
  displayOutput.innerHTML = "";
  num = "";
  switch (fun) {
    case "divide":
      current_calculation.push("/");
      displayCurrent.innerHTML += " / ";
      break;
    case "multiply":
      current_calculation.push("*");
      displayCurrent.innerHTML += " * ";
      break;
    case "subtract":
      current_calculation.push("-");
      displayCurrent.innerHTML += " - ";
      break;
    case "add":
      current_calculation.push("+");
      displayCurrent.innerHTML += " + ";
      break;
  }
}

function calculate() {
  displayCurrent.innerHTML += num;
  current_calculation.push(num);
  var output = 0;
  let current_operation = "";
  let count = 0;
  for (i = 0; i < current_calculation.length; i++) {
    let curr = current_calculation[i];
    
    if (count % 2 == 0) {
      curr = Number(curr);
      switch (current_operation) {
        case "+":
          output += curr;
          break;
        case "-":
          output -= curr;
          break;
        case "/":
          output /= curr;
          break;
        case "*":
          output *= curr;
          break;
        default:
          output = curr;
      }
    } else {
      current_operation = curr;
    }
    count++;
  }
  document.getElementById("calculator-display-output").innerHTML = output;

  let text = "";
  let textHistory =
    '<p class="history-card-current">' + displayCurrent.innerHTML + "</p>";
  let textOutput =
    '<p class="history-card-output">' + displayOutput.innerHTML + "</p>";
  text += textHistory + textOutput;

  var div = document.createElement("div");
  div.className = "history-card";
  div.innerHTML = text;

  document.getElementById("history-tray").appendChild(div);

  current_calculation = [];
  nextCalculation = true;
}

function clearAll() {
  displayOutput.innerHTML = "";
  displayCurrent.innerHTML = "";
  current_calculation = [];
  num = "";
  currentString = "";
}

function clearHistory(){
  const hist = document.getElementById("history-tray");
  hist.innerHTML= " ";
}
