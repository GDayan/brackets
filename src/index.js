module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openingBrackets.push(bracketsConfig[i][0]);
    closingBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (openingBrackets.includes(currentBracket)) {
      // Если текущая скобка - открывающая, помещаем ее в стек
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      // Если текущая скобка - закрывающая, проверяем соответствие с последней открывающей скобкой в стеке
      const lastOpeningBracket = stack.pop();
      const correspondingClosingBracket = closingBrackets[openingBrackets.indexOf(lastOpeningBracket)];

      if (currentBracket !== correspondingClosingBracket) {
        return false; // Несоответствие скобок
      }
    }
  }

  return stack.length === 0;
}
