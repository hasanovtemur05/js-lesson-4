//  1 - masala

// function sumOfEvensAndOdds(num) {
//     let sumEvens = 0;
//     let sumOdds = 0;

//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             sumEvens += i;
//         } else {
//             sumOdds += i;
//         }
//     }

//     console.log("Juft sonlar yig'indisi: " + sumEvens);
//     console.log("Toq sonlar yig'indisi: " + sumOdds);
//     console.log("Farq: " + (sumEvens - sumOdds));
// }
// const input = prompt("Iltimos, son kiriting:");
// const num = parseInt(input, 10);

// if (!isNaN(num) && num > 0) {
//     sumOfEvensAndOdds(num);
// } else {
//     console.log("Iltimos, musbat butun son kiriting.");
// }



// 2 - masala
// function sumUpTo(num) {
//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }

//     return sum;
// }

// sumUpTo()



//  3 - msala
// let inputArray = [1, 2, 3, 4, 5, 6    ];
// let result = sumArray(inputArray);
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log("Array ichidagi sonlar yig'indisi: " + result);



// 4 - masala
// let arr = [1, 2, 3, 4, 5, 6];
// let result = sumEvenNumbers(arr);
// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum; 
// }
// console.log("Array ichidagi juft sonlar yig'indisi: " + result);



// 5 - masala
// let inputArray = [1, 2, 3, 4, 5];
// let numberToFind = 5;
// let result = isNumberInArray(inputArray, numberToFind);
// function isNumberInArray(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return "bor";
//         }
//     }
//     return "yuq";
// }
// console.log("Son array ichida bor: " + result);



// 6 - masala
// let inputArray = [1, 2, 3, 4, 5];
// let numberToModify = 3;
// let modifiedArray = modifyArray(inputArray, numberToModify);
// function modifyArray(arr, num) {
//     const index = arr.indexOf(num);
//     if (index !== -1) {
//         arr.splice(index, 1);
//         arr.push(num)
//     } else {
//         arr.push(num);
//     }

//     return arr;
// }
// console.log("O'zgartirilgan array: "+ modifiedArray );



// 7 - masala
// let inputArray = [1, 2, 3, 4, 5, 6];
// let result = difference(inputArray);
// function difference(arr) {
//     let firstElement = arr[0];
//     let lastElement = arr[arr.length - 1];
//     let difference = Math.abs(firstElement - lastElement);
//     return difference;
// }
// console.log("Birinchi va oxirgi sonlar o'rtasidagi musbat farq: ", result);