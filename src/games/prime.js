import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MAX_NUMBER = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const rootOfNumber = Math.sqrt(number);
  for (let i = 2; i <= rootOfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(MAX_NUMBER);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRound());
  }
  run(raunds, description);
};
