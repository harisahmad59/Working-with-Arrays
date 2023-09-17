// Working with arrays

// 1 - checking whether guest is invited or not
// var guestList = ["haris", "faiq", "bilal", "waris", "faizan"];

// var guestName = prompt("what is your name");

// if (guestList.includes(guestName)) {
//   alert("welcome");
// } else {
//   alert("sorry try next time");
// }

// 2 - Fizzbuzz game
// var arr = [];
// var count = 1;
// function fizzbuzz() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     arr.push("fizzbuzz");
//   } else if (count % 3 === 0) {
//     arr.push("fizz");
//   } else if (count % 5 === 0) {
//     arr.push("buzz");
//   } else {
//     arr.push(count);
//   }

//   count++;

//   console.log(arr);
// }

// 3 - fizzbuzz using while loop
// var arr = [];
// var count = 1;
// function fizzbuzz() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       arr.push("fizzbuzz");
//     } else if (count % 3 === 0) {
//       arr.push("fizz");
//     } else if (count % 5 === 0) {
//       arr.push("buzz");
//     } else {
//       arr.push(count);
//     }

//     count++;
//   }
//   console.log(arr);
// }

//4 - fizzbuzz using for loop
// var arr = [];
// function fizzbuzz() {
//   for (var count = 1; count < 101; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       arr.push("fizzbuzz");
//     } else if (count % 3 === 0) {
//       arr.push("fizz");
//     } else if (count % 5 === 0) {
//       arr.push("buzz");
//     } else {
//       arr.push(count);
//     }
//   }
//   console.log(arr);
// }

//5 - fibonacci series
// function fibonacciGenerator(n) {
//   var output = [];
//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (var i = 2; i < n; i++) {
//       output.push(output[output.length - 2] + output[output.length - 1]); //[0,1,1]
//     }
//   }

//   return output;
// }

// output = fibonacciGenerator(5);
// console.log(output);
