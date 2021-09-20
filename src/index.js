import readlineSync from 'readline-sync';

export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getRandomSymbol = () => {
  let result = '';
  const symbol = '+-*';
  for (let i = 0; i < 1; i += 1) {
    result += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return result;
};

export const makeCheckResponse = (userResponse, response) => userResponse === response;

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

export const getUserResponse = (gameName, name) => {
  if (gameName === 'brain-even') {
    for (let i = 0; i < 3; i += 1) {
      const question = getRandomNumber();
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = question % 2 === 0 ? 'yes' : 'no';
      const result = makeCheckResponse(userResponse, response);
      if (!result) {
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
      const oneRandom = getRandomNumber();
      const twoRandom = getRandomNumber();
      const threeRandom = getRandomSymbol();
      const question = `${oneRandom} ${threeRandom} ${twoRandom}`;
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      let response;
      switch (threeRandom) {
        case '*':
          response = (oneRandom * twoRandom);
          break;
        case '+':
          response = (oneRandom + twoRandom);
          break;
        case '-':
          response = (oneRandom - twoRandom);
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
      const oneRandomNumber = getRandomNumber();
      const twoRandomNumber = getRandomNumber();
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
  console.log(`Congratulations, ${name}!`);
};
