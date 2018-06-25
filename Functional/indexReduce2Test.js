const numbers = [2,10,11,5,16];

//var sum = numbers.reduce(function (acc, currValue) {
//    return acc + currValue;
//}, 0);

//ES6
const sum = numbers.reduce((acc, currValue) => {
    return acc + currValue;
}, 0);

console.log(sum);