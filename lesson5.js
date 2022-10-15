// let message = "blabla";

// showMessage(message);

// function showMessage(message) {
//     console.log(message);
// }

// function sayHi(userName) {
//   if (userName) {
//     console.log(`Hi ${userName}!`);
//   } else {
//     console.log("Hi Guest!");
//   }
// }

// sayHi();
// sayHi("Alex");

// function exponentiation(a, b = 1) {
//     let result = a ** b;
//     console.log(result);
// }

// exponentiation(10, 12);
// exponentiation(43);
// exponentiation(3,9);

// function arithemticMean(array) {
//   let sum = 0;
//   for (let num of array) {
//     sum += num;
//   }
//   let result = sum / array.length;
//   console.log(result);
// }

// arithemticMean([1, 2, 3, 4, 5, 5, 6]);
// arithemticMean([1, 2, 3]);
// arithemticMean([523, 642, 31331, 5232, 432, 62, 1341, 52]);

// const middle = (arr = [1, 1]) =>
//   Array.isArray(arr)
//     ? arr.reduce((acc, el) => acc + el, 0) / arr.length
//     : "Не массив";

// console.log(middle([1, 123, 1212, 213, 32]));
// console.log(middle(true));
// console.log(middle(null));
// // console.log(middle());

// let showText = function (text) {
//   alert(text);
// };
// console.log(showText); // код функции

// const getName = (name) => `Name ${name}`;

// console.log(getName("Alex"));
// console.log(getName("Ivan"));

const printStringNumberTimes = (string, number) => {
  for (i = 0; i < number; i++) {
    console.log(string);
  }
};

//  printStringNumberTimes("stroka1", 5);
//  printStringNumberTimes("stroka2", 6);

const isVowel = (vowel) => {
  switch (vowel) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
      return true;
    default:
      return false;
  }
};

const isVowel2 = (vowel) => ["a", "e", "i", "o", "u", "y"].includes(vowel);

console.log(isVowel2("a"));
console.log(isVowel2("b"));
console.log(isVowel2("y"));

const isPalyndrome = (word) => {
  word = word.toLowerCase().split(" ").join("");
  let result = word === word.split("").reverse().join("") ? true : false;
  return result;
};
// console.log(isPalyndrome("шалаш"));
// console.log(isPalyndrome("ералаш"));
// console.log(isPalyndrome("дед"));
// console.log(isPalyndrome("А роза упала на лапу Азора"));
// console.log(isPalyndrome("Лакал пиво Иов и плакал"));
