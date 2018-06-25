const myArray = [1,2,3,4];

const sum = myArray.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
}, 0);

const avg = sum / myArray.length;

console.log(avg);