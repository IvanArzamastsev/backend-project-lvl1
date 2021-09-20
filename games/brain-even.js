#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUserResponse } from '../src/index.js';

const gameName = 'brain-even';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
getUserResponse(gameName, name);
