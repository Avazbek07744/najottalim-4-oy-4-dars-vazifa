//? If else misollari

//! 1-misol \\\

// let yosh = +prompt("Yoshingizni kiriting")

// if (yosh <= 18) {
//     console.log("Siz katta yoshdagisiz");
// } else {
//     console.log("Siz hali yoshsiz");
// }

//! 2-misol \\\

// let son = +prompt("Son kiriting ...")

// if (son % 2 == 0) {
//     console.log(`Juft son`);
// } else {
//     console.log(`Toq son`);
// }

//! 3-misol \\\

// let son = +prompt("Son kiriting ...")

// if (son > 0) {
//     console.log('musbat son');
// } else {
//     console.log('manfiy son');
// }

//! 4-misol \\\

// let harorat = +prompt("Haroratni kiriting ...")

// if (harorat >= 20) {
//     console.log('Yengil kiying');
// } else {
//     console.log('Qalin kiying');
// }

//! 5-misol \\\

// let son = +prompt("Son kiriting ...")

// if (son <= 90) {
//     console.log('Alo');
// } else if (son <= 70) {
//     console.log('Yaxshi');
// }
// else if (son <= 50) {
//     console.log('Qoniqarli');
// }
// else {
//     console.log('Yomon');
// }

//! 6-misol \\\

// let name = prompt("Ismingizni kiriting ...")

// if (name == "Ali") {
//     console.log('Salom, ' + name);
// } else {
//     console.log('Salom, mehmon');
// }

//! 7-misol \\\

// let sum = +prompt("Narhini kiriting ...")

// if (sum > 100) {
//     console.log("Chegirma qo'llanildi");
// } else {
//     console.log("Chegirma mavjud emas");
// }

//? Ternariyga oid misollar

//! 1-misol \\\

// let harorat = +prompt('Haroratni kiriting ...');
// let number = 25;

// harorat > number ? console.log('Issiq') : console.log('Sovuq');;

//! 2-misol \\\

// let ball = +prompt('Haroratni kiriting ...');
// let number = 50;

// ball >= number ? console.log("O'tdi") : console.log('Yiqildi');;

//! 3-misol \\\

// let son = +prompt('Haroratni kiriting ...');
// let number = 0;

// son > number ? console.log('Musbat') : console.log('Manfiy');;

//? For sikli misollari

//! 1-misol \\\

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//! 2-misol \\\

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//! 3-misol \\\

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//! 4-misol \\\

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

//! 5-misol \\\

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log(sum);

//! 6-misol \\\

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = i * i;
// }

// console.log(sum);

//! 7-misol \\\

// let num = +prompt("Son kiriting ...");
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }

//! 8-misol \\\

// for (let i = 1; i <= 50; i++) {
//     console.log(i*i);
// }

//! 9-misol \\\

// for (let i = 1; i <= 20; i++) {
//     console.log(i**3);
// }

//! 10-misol \\\

// let sum = 0;

// for (let i = 1; i <= 1000; i++) {
//     sum = sum + i;
// }

// console.log(sum);

//! 11-misol \\\

// for (let i = 1; i <= 5; i++) {
//     console.log("salom");
// }

//! 12-misol \\\

// for (let i = 1; i <= 100; i++) {
//     console.log(i * 2);
// }

//! 13-misol \\\

// let sum = 2;

// for (let i = 1; i <= 10; i++) {
//     console.log(sum**i);
// }

//! 14-misol \\\

// let num = +prompt("Son kiriting ...");

// for (let i = num; i <= num; i++) {
//     console.log(i*i);
// }

//! 15-misol \\\

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
// }

//? booleanga oid misollar

//! 11-misol \\\

// let a = +prompt("a sonni kiriting ...");
// let b = +prompt("b sonni kiriting ...");

// if (a % 2 == 0 && b % 2 == 0 || a % 2 == 1 && b % 2 == 1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 12-misol \\\

// let a = +prompt("a sonni kiriting ...");
// let b = +prompt("b sonni kiriting ...");
// let c = +prompt("c sonni kiriting ...");

// if (a > 0 && b > 0 && c > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 13-misol \\\

// let a = +prompt("a sonni kiriting ...");
// let b = +prompt("b sonni kiriting ...");
// let c = +prompt("c sonni kiriting ...");

// if (a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0 || a < 0 && b < 0 && c > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 14-misol \\\

// let a = +prompt("a sonni kiriting ...");
// let b = +prompt("b sonni kiriting ...");
// let c = +prompt("c sonni kiriting ...");

// if (a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0 || a < 0 && b < 0 && c > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 15-misol \\\

// let a = +prompt("a sonni kiriting ...");
// let b = +prompt("b sonni kiriting ...");
// let c = +prompt("c sonni kiriting ...");

// if (a > 0 && b > 0 && c < 0 || a > 0 && b < 0 && c > 0 || a < 0 && b > 0 && c > 0 ) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//! 16-misol \\\

// let a = +prompt("Ikki xonali sonni kiriting ...");

// if (a < 100 && a > 9 && a % 2 == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }