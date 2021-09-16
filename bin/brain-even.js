#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/index.js';

const name = readlineSync.question('May I have your name?: ');
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
let counter = 0;
while (counter < 3) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const response = readlineSync.question('Your answer: ');
  if (number % 2 === 0) {
    if (response === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      counter += 3;
    }
  }
  if (number % 2 !== 0) {
    if (response === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      counter += 3;
    }
  }
}
console.log(`Congratulations, ${name}!`);
