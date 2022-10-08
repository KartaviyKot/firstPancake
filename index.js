const AB = 25;
const CD = 26;
const EF = 32;

console.log(Math.max(AB, CD, EF));

if (AB > CD) {
  AB > EF ? console.log(AB) : console.log(EF);
} else {
  CD > EF ? console.log(CD) : console.log(EF);
}

let userRole = "manager";

switch (userRole) {
  case "admin":
    console.log("Hello Admin!");
    break;
  case "manager":
    console.log("Hello Manager");
    break;
  case "user":
    console.log("Hello User");
    break;
  default:
    console.log("Write down your login please");
}
