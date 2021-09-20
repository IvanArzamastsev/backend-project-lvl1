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

export const getUserResponse = (gameName, name) => {
  for (let i = 0; i < 3; i += 1) {
    if (gameName === 'brain-even') {
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
      if (!makeCheckResponse(Number(userResponse), response)) {
        console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${response}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
