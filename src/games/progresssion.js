import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const description = 'What number is missing in the progression?';

const MAX_FIRST_NUMBER = 1000;
const MAX_STEP = 10;
const LENGTH = 10;

const getProgression = (length, step, first) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const generateRound = () => {
  const first = getRandomNumber(MAX_FIRST_NUMBER);
  const step = getRandomNumber(MAX_STEP);
  const progression = getProgression(LENGTH, step, first);
  const randomIndex = getRandomNumber(progression.length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRound());
  }
  run(raunds, description);
};
