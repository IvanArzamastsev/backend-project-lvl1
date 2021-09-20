#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUserResponse } from '../src/index.js';

const gameName = 'brain-calc';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
getUserResponse(gameName, name);
