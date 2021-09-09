#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { nameGreeting } from '/home/user/backend-project-lvl1/src/cli.js';
console.log("Welcome to the Brain Gemes!");
const name = readlineSync.question('May I have your name?: ');
console.log(nameGreeting(name));