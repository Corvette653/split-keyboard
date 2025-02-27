import { parse } from './exercise.js';

const TESTS = {
  '1234': 1234,
  '01234': 1234,
  '+1234': 1234,
  '1_234': 1234,
  '1_000_000': 1000000,
  '-1234': -1234,
  '12.34': 12.34,
  '012.34': 12.34,
  '+012.34': 12.34,
  '-12.34': -12.34,
  '1.2e3': 1.2e3,
  '-01.2E-3': -1.2e-3
};

let PASSED = 0;

const printGreen = (message) => console.log(`\x1b[32m${message}\x1b[0m`);
const printYellow = (message) => console.log(`\x1b[33m${message}\x1b[0m`);
const printRed = (message) => console.log(`\x1b[31m${message}\x1b[0m`);

const printPassed = (input, output) => printGreen(`Test passed: ${input} -> ${output}`);
const printFailed = (input, output, expected) => {
  printYellow(`Test failed: ${input}`);
  printYellow(`GOT: ${output}`);
  printYellow(`EXPECTED: ${expected}`);
};
const printError = (input, error) => {
  printRed(`Test failed: ${input}`);
  printRed(`ERROR: ${error}`);
};

Object.entries(TESTS).forEach(([input, expected]) => {
  input = input.split("")
  try {
    const result = parse(input);
    if (result === expected) {
      PASSED++;
      printPassed(input, expected);
    } else {
      printFailed(input, result, expected);
    }
  } catch (error) {
    printError(input, error);
  }
});

console.log(`Passed ${PASSED} / 10`);
