// Return all even numbers
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0 ? number : '';
})
console.log(`Even numbers: ${evenNumbers}`);

// Return adults
const people = [
    {
        name: 'Nikola',
        age: 28,
    },
    {
        name: 'John',
        age: 26,
    },
    {
        name: 'Jack',
        age: 13,
    },
    {
        name: 'Nik',
        age: 17,
    }    
];
const adultsList = people.filter(person => person.age >= 18);
console.log(adultsList);