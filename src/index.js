import readlineSync from 'readline-sync';

export const raundCount = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = (num) => Math.floor(Math.random() * num);
