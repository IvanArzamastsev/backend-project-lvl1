import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const maxDivisor = number2 ? gcd(number2, number1 % number2) : number1;
  return maxDivisor;
};

const generateRaund = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
