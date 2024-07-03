// VALEUR ACTUELLE AFFICHÉE SUR L'ÉCRAN
let displayValue = '';

// PREMIER OPÉRANDE POUR LE CALCUL
let firstOperand = null;

// DEUXIÈME OPÉRANDE POUR LE CALCUL
let secondOperand = null;

// OPÉRATION ACTUELLEMENT SÉLECTIONNÉE
let currentOperation = null;

// FONCTION POUR AJOUTER UN CHIFFRE À L'AFFICHAGE
function appendNumber(number) {
  // AJOUTE LE CHIFFRE À LA VALEUR AFFICHÉE
  displayValue += number;
  // MET À JOUR L'AFFICHAGE
  document.getElementById('display').value = displayValue;
}

// FONCTION POUR DÉFINIR L'OPÉRATION À EFFECTUER
function setOperation(operation) {
  // SI UNE OPÉRATION EST DÉJÀ SÉLECTIONNÉE, CALCULER LE RÉSULTAT
  if (currentOperation !== null) {
    calculateResult();
  }
  // STOCKE LE PREMIER OPÉRANDE
  firstOperand = parseFloat(displayValue);
  // STOCKE L'OPÉRATION SÉLECTIONNÉE
  currentOperation = operation;
  // RÉINITIALISE LA VALEUR AFFICHÉE
  displayValue = '';
}

// FONCTION POUR CALCULER LE RÉSULTAT
function calculateResult() {
  // STOCKE LE DEUXIÈME OPÉRANDE
  secondOperand = parseFloat(displayValue);
  let result;

  // EXÉCUTE L'OPÉRATION SÉLECTIONNÉE
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
      // GESTION DE L'ERREUR DIVISION PAR ZÉRO
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

  // MET À JOUR LA VALEUR AFFICHÉE AVEC LE RÉSULTAT
  displayValue = result.toString();
  document.getElementById('display').value = displayValue;

  // RÉINITIALISE L'OPÉRATION SÉLECTIONNÉE
  currentOperation = null;
}

// FONCTION POUR EFFACER L'AFFICHAGE ET RÉINITIALISER LES VARIABLES
function clearDisplay() {
  // RÉINITIALISE TOUTES LES VARIABLES ET L'AFFICHAGE
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  document.getElementById('display').value = displayValue;
}
