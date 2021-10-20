import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const getRandomSymbol = () => {
  const symbol = '+-*';
  const result = symbol[getRandomNumber(symbol.length - 1)];
  return result;
};

const MAX_OPERAND_NUMBER = 100;

const description = 'What is the result of the expression?';

const getAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case '*':
      return operand1 * operand2;
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operand1 = getRandomNumber(MAX_OPERAND_NUMBER);
  const operand2 = getRandomNumber(MAX_OPERAND_NUMBER);
  const operator = getRandomSymbol();
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(getAnswer(operand1, operand2, operator));
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < raundCount; i += 1) {
    rounds.push(generateRound());
  }
  run(rounds, description);
};
