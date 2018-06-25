const myArray = [1,2,3,4];

const myEvenArray = myArray.filter((value, index, array) => {
    return value % 2 === 0;
});

console.log(myArray);
console.log(myEvenArray);
