import readlineSync from 'readline-sync';
import { greeting } from './index.js';

export default (raunds, description) => {
  const name = greeting();
  console.log(description);
  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of raunds) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
