// Get total sum of array
const numbers = [1, 2, 3, 4, 5, 6, 70, 8, 9, 10];
const total = numbers.reduce((previousValue, nextValue) => {
    return previousValue += nextValue;
}, 0)

console.log(`Total sum is: ${total}`);

// Get max value from array
const maxValue = numbers.reduce((accumulator, value) => {
    if(accumulator > value){
        return accumulator;
    }else{
        return value;
    }
})
console.log(`Max value is: ${maxValue}`);