var numbers = [1,2,3,4,5,6,7,8,9,10];

//var eventNumbers = numbers.filter(function (num) {
//    return num % 2 === 0;
//});

//ES6
const eventNumbers = numbers.filter(num => {
    return num % 2 === 0
});

console.log(eventNumbers);
