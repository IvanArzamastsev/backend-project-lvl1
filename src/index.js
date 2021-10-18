import readlineSync from 'readline-sync';

export const raundCount = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export const findDivisorsOfNumber = (number) => {
  const arrayOfDivisors = [];
  // eslint-disable-next-line for-direction
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      arrayOfDivisors.push(i);
    }
  }
  return arrayOfDivisors;
};
