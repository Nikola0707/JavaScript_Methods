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

// Get monthly expenses
const monthExpenses = [
    {
        product: 'Car care',
        price: 100,
        count: 1
    },
    {
        product: 'Kids School',
        price: 1100,
        count: 3
    },
    {
        product: 'Bills',
        price: 2130,
        count: 1
    }
];

const totalMonthly = monthExpenses.reduce((acc, item) => {
    return acc + item.price * item.count;
}, 0)
console.log(`Total Expenses: $${totalMonthly}`);