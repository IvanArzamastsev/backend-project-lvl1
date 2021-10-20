import { raundCount, getRandomNumber } from '../index.js';
import run from '../cli.js';

const isEven = (num) => num % 2 === 0;

const MAX_NUMBER = 10;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(MAX_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRound());
  }
  run(raunds, description);
};
