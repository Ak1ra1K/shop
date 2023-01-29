// const str = "dias-qainar-qanat";
// console.log(str.toUpperCase());

// function camalize2(str){
//     return str.split("-")
//                 .map(el=>{
//                     return el[0].toUpperCase
//                 })
// }

// let newStr = camalize2("dias-qainar-qanat")

// console.log(newStr);
// // 1
// let arr1 = [1, 2, 3];
// let arr3 = [4, 5, 6];
// console.log(arr1.concat(arr3));
// // 2
// let arr7 = [1, 2, 3];
// arr7.reverse();
// console.log(arr7);
// // 3
// let arr4 = [1, 2, 3];
// arr4.push(4, 5, 6);
// console.log(arr4);
// // 4
// let arr5 = [1, 2, 3];
// arr5.unshift(4, 5, 6);
// console.log(arr5); //
// // 5
// let arr6 = ["js", "css", "jq"];
// arr6.shift();
// console.log(arr6);
// // 6
// let arr8 = ["js", "css", "jq"];
// arr8.pop();
// console.log(arr8);
// // 7
// let arr9 = [1, 2, 3, 4, 5];
// console.log(arr9.slice(0, 3));
// // 8
// let arr10 = [1, 2, 3, 4, 5];
// console.log(arr10.slice(-2));
// // 9
// let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(1, 2);
// console.log(arr11);
// // 10
// let arr12 = [1, 2, 3, 4, 5];
// let arr13 = arr12.splice(1, 3);
// console.log(arr13);
// // 11
// let arr14 = [1, 2, 3, 4, 5];
// arr14.splice(2, 1, 3, "a", "b", "c");
// console.log(arr14);
// // 12
// let arr15 = [1, 2, 3, 4, 5];
// arr15.splice(1, 1, "a", "b", 2);
// arr15.splice(6, 1, "c", 5, "e");
// console.log(arr15);
// // 13
// let arr16 = [3, 4, 1, 2, 7];
// arr16.sort();
// console.log(arr16);
// // 14
// let arr17 = { js: "test", jq: "hello", css: "world" };
// // 1

// let didarBirthDate = "birthDate";

// let obj = {
//   name: "Didar",
//   BirthDate: 1994,
//   countMyAge: function () {
//     return new Date().getFullYear() - this.BirthDate;
//   },
// };

// age = obj.countMyAge();
// console.log(age);

// 5
// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(c);
// obj.c;
// obj1["c"];

// 6
// let obj2 = {
//   Коля: "1000",
//   Вася: "500",
//   Петя: "200",
// };
// console.log(Коля, Петя);

// 7
// let obj3 = {
//   1: "M",
//   2: "T",
//   3: "W",
//   4: "Th",
//   5: "F",
//   6: "St",
//   7: "Su",
// };
// let currentDay = new Date().getDate;
// console.log(obj3[currentDay]);

// function getNum(n) {
//   let arr18 = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 2 == 1) {
//       arr18.push(i);
//     }
//   }
//   return arr;
// }
// let result = getNum(10);
// let result2 = getNum(9999);

// console.log(result, result2);

// function getNum(n) {
//   let a = 2;
//   let d = 5;
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(a * Math.pow(d, i));
//   }
//   return result;
// }

// let res = getNum(8);
// console.log(res);

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i < n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// let res = fib(50);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     console.log(arr2[i][j]);
//   }
// }

// let arr = [
//  ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
//  ['Пон','Вто','Сре','Чет','Пят','Суб','Вос']
// ]

// let arr18 = [1, 2, 3];
// let max = arr18[2];
// arr18.forEach((e) => {
//   if (e > max) {
//     max = e;
//   }
// });
// console.log(max);

// let arr19 = [1, 2, 3];
// let min = arr19[2];
// arr19.forEach((e) => {
//   if (e < min) {
//     min = e;
//   }
// });
// console.log(min);

// let arr20 = [1, 2, 3];
// console.log(Array.isArray(arr20));

// let arr21 = [1, 1];
// arr21.push(1, 1, 1);
// console.log(arr21);

// [1, 2, 3, 4, 5].fill(1); //[1,1,1,1,1]

// function fillArray1(n, k) {
//   let arr22 = [];
//   for (let i = 0; i < n; i++) {
//     arr22.push(k);
//   }
//   return arr22;
// }

// let n = fillArray1(4, 8);

// function fillArray2(n, k) {
//   return Array(n).fill(k);
// }

// let nl = fillArray2(5, 1);
// console.log(nl);

// let arr23 = ["a", "b", "c", "d"];
// console.log(arr23.slice(0, 4));

// let arr24 = [1, 2, 3, 4, 5];
// console.log(arr24.slice(1, 4));

// let arr25 = [1, 2, 3, 4, 5];

// let result = arr25.reduce((sum, current) => sum + current, 0);

// console.log(result);

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Connect to server ...");
    let server = {
      name: "aws",
      port: 3000,
      data: [1, 2, 3],
    };
    //error
    reject("error");
  }, 2000);
})
  .then((s) => {
    setTimeout(() => {
      console.log("Preaparing data ...");
      console.log(s);
    }, 2000);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {});

addDeleteEvent();
addLikesEvent();
changePageEvent();

function changePageEvent() {
  let imgs = document.querySelectorAll(".img");
  imgs.forEach((e) => {
    e.addEventListener("click", onChangePage);
  });
}

function onChangePage(e) {
  console.log(e.currentTarget);
  console.log(image.nextSibling.nextSibling);
}

function addDeleteEvent() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", onDeleteCard);
  });
}

function addLikesEvent() {
  let buttons = document.querySelectorAll(".btn-like");
  buttons.forEach((button) => {
    button.addEventListener("click", onLikeCard);
  });
}
