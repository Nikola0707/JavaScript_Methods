// Rest parameter is appears on the reciving side of the function
// Rest parameter regular function
function maxNumber(...numbers){
    let maxNum = numbers[0];
    console.log(maxNum);
    for(let i=0; i< numbers.length; i++){
        if(numbers[i] > maxNum){
            maxNum = numbers[i]
        }
    }
    return maxNum;
}
console.log(maxNumber(1, 28, 30, 4, 598, 666, 700, 81, 923, 100));

// Rest operator arrow function and reduce method
const findMaxNumber = (...numbers) => {
    return numbers.reduce((large, e) => large > e ? large : e, numbers[0]);
};
console.log(findMaxNumber(1, 50, 999 , 3));
