// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"

let stringOne = 'whoop';
let stringTwo = 'oh hey gurl';
const capitalize = (string) => {
    const stringToArray = string.split('');
    const toUpperCase = stringToArray.map(char => char.toUpperCase());
    return toUpperCase.join('');
}
console.log(capitalize(stringOne));
console.log(capitalize(stringTwo));