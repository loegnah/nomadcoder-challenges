class ArrayUtilities {
  static addZeros = (arr) => arr.map(x => x * 10);
  static moreThanFifty = (arr) => arr.filter(x => x > 50);
  static removeFirst = (arr) => arr.slice(1);
  static sumAll = (arr) => arr.reduce((acc, cur) => acc + cur);
  static divide = (num) => Array.from(num.toString())
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
