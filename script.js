var result = document.getElementById("result");
function addToResult(val) {
  result.value += val;
}
function clearResult() {
  result.value = "";
}
function calculate() {
  result.value = eval(result.value);
}