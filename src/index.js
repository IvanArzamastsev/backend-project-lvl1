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



export const makeCheckResponse = (userResponse, response) => {
  if (userResponse === response) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
    console.log(`Let's try again, ${name}!`);
    counter += 4;
    return console.log();
  }
};



export const getUserResponse = (gameName) => {
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    if (gameName === 'brain-even') {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      const question = getRandomNumber();
      console.log(`Question: ${question}`);
      const userResponse = readlineSync.question('Your answer: ');
      const response = question % 2 === 0 ? 'yes' : 'no';
    }

  }
  if (gameName === 'brain-calc') {
    console.log('What is the result of the expression?')
    const oneRandom = getRandomNumber();
    const twoRandom = getRandomSymbol();
    const threeRandom = getRandomNumber();
    const question = `${oneRandom()} ${twoRandom()} ${threeRandom()}`;
    console.log(`Question: ${question}`);
    const userResponse = readlineSync.question('Your answer: ');
    const response = oneRandom twoRandom threeRandom;
  }
  makeCheckResponse(userResponse, response);
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
