import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const getRandomSymbol = () => {
  let result = '';
  const symbol = '+-*';
  for (let i = 0; i < 1; i += 1) {
    result += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return result;
};

const description = 'What is the result of the expression?';

const getAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRaund = () => {
  const oneNumber = getRandomNumber(100);
  const twoNumber = getRandomNumber(100);
  const randomOperator = getRandomSymbol();
  const question = `${oneNumber} ${randomOperator} ${twoNumber}`;
  const answer = String(getAnswer(oneNumber, twoNumber, randomOperator));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
