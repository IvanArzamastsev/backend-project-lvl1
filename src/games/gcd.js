import { raundCount, getRandomNumber, findDivisorsOfNumber } from '../index.js';
import run from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';

const getAnswer = (number1, number2) => {
  const arrayOfDivisors1 = findDivisorsOfNumber(number1);
  const arrayOfDivisors2 = findDivisorsOfNumber(number2);
  let maxDivisor = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const divisors1 of arrayOfDivisors1) {
    // eslint-disable-next-line no-restricted-syntax
    for (const divisors2 of arrayOfDivisors2) {
      if (divisors1 === divisors2) {
        maxDivisor = divisors2;
      }
    }
  }
  return maxDivisor;
};

const generateRaund = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const question = `${number1} ${number2}`;
  const answer = String(getAnswer(number1, number2));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
