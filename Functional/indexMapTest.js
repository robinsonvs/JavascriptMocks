const myArray = [1,2,3,4];

const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

console.log(myArray);
console.log(myArrayTimesTwo);