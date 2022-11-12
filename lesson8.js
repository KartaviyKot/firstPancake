// const arr_3 = [1, 2, 3];
// const arr_4 = [1, 2, 3];

// const twoArr = (arr1, arr2) =>
//   arr1.length === arr2.length && arr1.every((e, ind) => e === arr2[ind]);

// console.log(twoArr(arr_3, arr_4));

// const compareArr=(arrA,arrB)=>{
//     if(arrA.length!=arrB.length) return false;
//     for(let i=0;i<arrA.length;i++){
//         if(arrA[i]!=arrB[i])return false;
//     }
//     return true;
// }

console.log(compareArr(arr_3, arr_4));

const compareArray = (arr1, arr2) => {
    const str1 = arr1.toString();
    const str2 = arr2.toString();
  
    if (str1.length === str2.length) {
      return str1 === str2;
    }
    return false;
};


const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];

// console.log(multiArr.toString());

// let str = multiArr.toString().split(",");

// console.log(str);

let arr = multiArr.flat(Infinity);

console.log(arr);


