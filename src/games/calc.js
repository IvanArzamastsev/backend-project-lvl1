import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const getRandomSymbol = () => {
  const symbol = '+-*';
  const result = symbol[getRandomNumber(2)];
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
  const rounds = [];
  for (let i = 0; i < raundCount; i += 1) {
    rounds.push(generateRaund());
  }
  run(rounds, description);
};
