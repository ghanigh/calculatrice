// FONCTION POUR L'ADDITION DE DEUX NOMBRES
function add(a, b) {
  return a + b;
}

// FONCTION POUR LA SOUSTRACTION DE DEUX NOMBRES
function subtract(a, b) {
  return a - b;
}

// FONCTION POUR LA MULTIPLICATION DE DEUX NOMBRES
function multiply(a, b) {
  return a * b;
}

// FONCTION POUR LA DIVISION DE DEUX NOMBRES
function divide(a, b) {
  // VÉRIFICATION SI LE DENOMINATEUR EST ZÉRO
  if (b === 0) {
    // LANCE UNE ERREUR SI DIVISION PAR ZÉRO
    throw new Error("Division by zero");
  }
  return a / b;
}

// EXPORTATION DES FONCTIONS POUR POUVOIR LES UTILISER DANS D'AUTRES FICHIERS
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
