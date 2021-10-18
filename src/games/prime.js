import { raundCount, getRandomNumber, findDivisorsOfNumber } from '../index.js';
import run from '../cli.js';

const isAnswer = (number) => findDivisorsOfNumber(number).length === 2;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRaund = () => {
  const question = getRandomNumber(1000);
  const answer = isAnswer(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const raunds = [];
  for (let i = 0; i < raundCount; i += 1) {
    raunds.push(generateRaund());
  }
  run(raunds, description);
};
