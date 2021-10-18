import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'What number is missing in the progression?';

const makeRandomSecretProgression = (firstNumber, difference, lengthOfPogression) => {
  const arrayProgression = [firstNumber];
  for (let i = 0; i < lengthOfPogression; i += 1) {
    arrayProgression.push(arrayProgression[i] + difference);
  }
  arrayProgression[getRandomNumber(9)] = '..';
  return arrayProgression.join(' ');
};

const findTheSecretProgressionSymbol = (progression, difference) => {
  const arrayProgression = progression.split(' ');
  let result = 0;
  if (arrayProgression[0] === '..') {
    return Number(arrayProgression[1]) - difference;
  }
  for (let i = 1; i < arrayProgression.length; i += 1) {
    if (arrayProgression[i] === '..') {
      result = Number(arrayProgression[i - 1]) + difference;
    }
  }
  return result;
};

const generateRaund = () => {
  const firstNumber = getRandomNumber(100);
  const difference = getRandomNumber(6);
  const lengthOfPogression = 10;
  const question = makeRandomSecretProgression(firstNumber, difference, lengthOfPogression);
  const answer = String(findTheSecretProgressionSymbol(question, difference));
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
