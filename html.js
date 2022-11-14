const arr = [2, 3, 4, 6, 7, 8];

//Find Methods  return single value
// const result = arr.find((value, index) => {
//     if (value > 4) {
//         return value;
//     }
// });

// console.log(result);

//Fillter Method   return Array
// const result = arr.filter((value, index) => {
//     if (value > 4) {
//         return value;
//     }
// });

// console.log(result);


//Every Method  true & false

// const result = arr.every((value, index) => {
//     if (value >= 2) {
//         return value;
//     }
//     console.log(index);
// });
// console.log(result);


//Some Method   return true & false
// const result = arr.some((value, index) => {
//     return value < 3;
// });

// console.log(result);


//For of loop
// for (let value of arr) {
//     value += 3;
//     console.log(value);
// }

//ForEach Loop
// let totalSum = 0;
// arr.forEach((value, index) => {
//     totalSum += value
//     // console.log(value);
// });
// console.log(totalSum);

// Map() method it return new array
// const result = arr.map((value, index) => {
//     return value += 20;
// });
// console.log(result);


//Reduce() Method  it start from 1 index
const retult = arr.reduce((previousValue, currentValue, index) => {
    return previousValue + currentValue;
})
console.log(retult);






