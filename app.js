const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];

const average = _.mean(numbers);

console.log(`Średnia arytmetyczna tablicy [${numbers}] wynosi: ${average}`);

const minValue = _.min(numbers);
const maxValue = _.max(numbers);

console.log(`Wartość minimalna: ${minValue}`);
console.log(`Wartość maksymalna: ${maxValue}`);