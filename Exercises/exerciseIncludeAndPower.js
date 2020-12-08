// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragonsInclude = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// console.log(dragonsInclude.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const isIncludesJohn = dragons.filter(name => name.includes('John'))
console.log(isIncludesJohn);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOf100 = (num) => num ** 100;
console.log(powerOf100(10000));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
    //Infinity
// Research for yourself why you get this result
/*
    Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
*/