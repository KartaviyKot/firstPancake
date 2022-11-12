// let array = ["1123", "221312421", "12312313", "124", "4124125"];
// let arrayLength = array.map(index => index.length);
// console.log(arrayLength);

let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];

let currentSums = (numbers) => {
  let resultArray = [];
  numbers.reduce((sum, current, i) => (resultArray[i] = sum + current), 0);
  return resultArray;
};

console.log(currentSums(numbers));

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sumSeven = (arr) => {
//     let result = []
//     for( let i of arr) {
//         for( let j of arr){
//             if(i + j === 7 && !result.includes(`${j}:${i}`)){
//                 result.push(`${i}:${j}`)
//             }
//         }
//     }
//     return result;
// }
// console.log(sumSeven(array));

// let string = "JavaScript";

// let stringSymbols = (string) => {
//   let result = [];
//   let { length } = string;
//   for (let i = 0; i < length; i += 1) {
//     if (i === 0) {
//       result.push(string.slice(0, 2));
//     } else if (i === length - 1) {
//       result.push(string.slice(-2));
//     } else {
//       result.push(string.slice(i - 1, i + 2));
//     }
//   }
//   return result;
// };

// const massThreeLet = (str) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//       arr.push(str.substring(i-1,i+2));
//     }
//     return arr;
//   };

// console.log(massThreeLet(string));
// console.log(stringSymbols(string));

// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// let arr3 = [4, 5, 6];

// const sortArr = (arr1, arr2, arr3) =>
//   [...arr1, ...arr2, ...arr3].sort((a, b) => b - a).join(' ').split();

// const getArr = (a, b, c) =>"[" + a.concat(b, c).sort((a, b) => b - a).join(" ") + "]";

// console.log(sortArr(arr1, arr2, arr3));
// console.log(getArr(arr1, arr2, arr3));

// const arr = [1, 2, 3, 43, 5, 6, 7, 84, 9];

// const customReverse = (arr) => {
//     const result = [];

//     for(let value of arr){
//         result.unshift(value);
//     }
//     return result;
// }

// console.log(customReverse(arr));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumTillTen = (arr) => {
//   let lastIndex;
//   if (arr[0] > 10) {
//     return 1;
//   }
//   arr.reduce((prev, cur, i) => {
//     if (prev + cur <= 10) {
//       lastIndex = i;
//       return prev + cur;
//     }
//   }, 0);
//   return lastIndex + 2;
// };

// console.log(sumTillTen(arr));
