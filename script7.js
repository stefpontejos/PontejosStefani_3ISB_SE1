const numbers =[4, 6, 2, 9, 5];
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

let sum = 0;
for (let n of numbers)
    sum + n;

    console.log(sum); 