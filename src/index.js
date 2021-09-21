import readlineSync from 'readline-sync';

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export const getRandomSymbol = () => {
  let result = '';
  const symbol = '+-*';
  for (let i = 0; i < 1; i += 1) {
    result += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return result;
};

export const makeRandomSecretProgression = (num, difference) => {
  const arrayProgression = [num];
  for (let i = 0; i < 9; i += 1) {
    arrayProgression.push(arrayProgression[i] + difference);
  }
  arrayProgression[getRandomNumber(9)] = '..';
  return arrayProgression.join(' ');
};

export const findTheSecretProgressionSymbol = (str, difference) => {
  const arrayProgression = str.split(' ');
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

export const findDivisorsOfNumber = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export const findTheGreatestDivisor = (number1, number2) => {
  const arrayOfDivisorsNumber1 = findDivisorsOfNumber(number1);
  const arrayOfDivisorsNumber2 = findDivisorsOfNumber(number2);
  let maxDivisor = 0;
  for (let i = 0; i < arrayOfDivisorsNumber1.length; i += 1) {
    const num = arrayOfDivisorsNumber1[i];
    for (let j = 0; j < arrayOfDivisorsNumber2.length; j += 1) {
      if (num === arrayOfDivisorsNumber2[j]) {
        maxDivisor = num;
      }
    }
  }
  return maxDivisor;
};

export const makeCheckResponse = (userResponse, response) => userResponse === response;

export const getUserResponse = (gameName, name) => {
  if (gameName === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const question = getRandomNumber(100);
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = question % 2 === 0 ? 'yes' : 'no';
      if (!makeCheckResponse(userResponse, response)) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  if (gameName === 'brain-calc') {
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
      const oneRandom = getRandomNumber(100);
      const twoRandom = getRandomNumber(100);
      const threeRandom = getRandomSymbol();
      const question = `${oneRandom} ${threeRandom} ${twoRandom}`;
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      let response;
      switch (threeRandom) {
        case '*':
          response = oneRandom * twoRandom;
          break;
        case '+':
          response = oneRandom + twoRandom;
          break;
        case '-':
          response = oneRandom - twoRandom;
          break;
        default:
          break;
      }
      if (!makeCheckResponse(userResponse, String(response))) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  if (gameName === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
      const oneRandomNumber = getRandomNumber(100);
      const twoRandomNumber = getRandomNumber(100);
      const question = `${oneRandomNumber} ${twoRandomNumber}`;
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = findTheGreatestDivisor(oneRandomNumber, twoRandomNumber);
      if (!makeCheckResponse(userResponse, String(response))) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  if (gameName === 'brain-progression') {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
      const firstNumber = getRandomNumber(100);
      const difference = getRandomNumber(5);
      const question = makeRandomSecretProgression(firstNumber, difference);
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = findTheSecretProgressionSymbol(question, difference);
      if (!makeCheckResponse(userResponse, String(response))) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  if (gameName === 'brain-prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const question = getRandomNumber(1000);
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = findDivisorsOfNumber(question).length === 2 ? 'yes' : 'no';
      if (!makeCheckResponse(userResponse, response)) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
