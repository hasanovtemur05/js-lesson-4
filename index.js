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
const inputArray = [1, 2, 3, 4, 5, 6, 7];
const result = sumArray(inputArray);
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log("Array ichidagi sonlar yig'indisi: " + result);
