import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';

const MAX_NUMBER = 100;
const MIN_NUMBER = 10;

const gcd = (number1, number2) => {
  const maxDivisor = number2 ? gcd(number2, number1 % number2) : number1;
  return maxDivisor;
};

const generateRound = () => {
  const number1 = getRandomNumber(MIN_NUMBER);
  const number2 = getRandomNumber(MAX_NUMBER);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRound());
  }
  run(raunds, description);
};
