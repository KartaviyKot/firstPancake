// const AB = 25;
// const CD = 26;
// const EF = 32;

// console.log(Math.max(AB, CD, EF));

// if (AB > CD) {
//   AB > EF ? console.log(AB) : console.log(EF);
// } else {
//   CD > EF ? console.log(CD) : console.log(EF);
// }

// let userRole = "manager";

// switch (userRole) {
//   case "admin":
//     console.log("Hello Admin!");
//     break;
//   case "manager":
//     console.log("Hello Manager");
//     break;
//   case "user":
//     console.log("Hello User");
//     break;
//   default:
//     console.log("Write down your login please");
// }

// let count = 10;
// let string = "stroka";

// for (i = 0; i < count; i++) {
//     console.log(string);
// }

// let carsToSale = 20123121;
// let limitForSale = 33;
// let daysCount = 0;

// while (carsToSale > limitForSale) {
//     carsToSale = carsToSale / 2;
//     daysCount++;
// }

// console.log(daysCount);

// const yearFrom = 1800;
// const yearTo = 2022;
// const yearFirstTimeToTheSpace = 1961;

// let yearTest1 = yearTo;
// let iterationsQuantityTest1 = 0;

// while (yearTest1 > yearFirstTimeToTheSpace) {
//   iterationsQuantityTest1++;
//   yearTest1--;
// }
// console.log(`Первый полёт человека в космос состоялся в ${yearFirstTimeToTheSpace} году.`);
// console.log(`Количество итераций до первого полёта в космос: ${iterationsQuantityTest1} \n`);

//----------------------------------------------------------------------------------
const yearFrom = 1800;
const yearTo = 2022;

let yearTest2 = yearFrom;
let iterationsCount2 = 0;
let leapYear = 0;

while (!(yearTest2 % 4 == 0)) {
  yearTest2 += 1;
  iterationsCount2++;
}
for (; yearTest2 < yearTo; yearTest2 += 4) {
    if (yearTest2 == 1800 || yearTest2 == 1900) {
      iterationsCount2++;
      continue;
    }
    leapYear++;
    iterationsCount2++;
  }

console.log("Количество високосных годов: " + leapYear);
console.log("Количество итераций для определения високосных годов: " + iterationsCount2);
