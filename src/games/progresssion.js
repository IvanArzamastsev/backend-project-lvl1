import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'What number is missing in the progression?';

const getSecretProgression = (length, step, secretSymbol) => {
  let firstNumber = getRandomNumber(1000);
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstNumber);
    firstNumber += step;
  }
  result[secretSymbol] = '..';
  return result.join(' ');
};

const getSecretSymbol = (progression, secretSymbol, step) => {
  const arrayOfProgression = progression.split(' ');
  if (secretSymbol === 0) {
    return Number(arrayOfProgression[secretSymbol + 1] - step);
  }
  return Number(arrayOfProgression[secretSymbol - 1]) + step;
};

const generateRaund = () => {
  const length = 10;
  const step = getRandomNumber(10);
  const secretSymbol = getRandomNumber(10);
  const question = getSecretProgression(length, step, secretSymbol);
  const answer = String(getSecretSymbol(question, secretSymbol, step));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
