let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function setOperation(operation) {
  if (currentOperation !== null) {
    calculateResult();
  }
  firstOperand = parseFloat(displayValue);
  currentOperation = operation;
  displayValue = '';
}

function calculateResult() {
  secondOperand = parseFloat(displayValue);
  let result;
  switch (currentOperation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert("Division by zero is not allowed");
        clearDisplay();
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  displayValue = result.toString();
  document.getElementById('display').value = displayValue;
  currentOperation = null;
}

function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  document.getElementById('display').value = displayValue;
}
