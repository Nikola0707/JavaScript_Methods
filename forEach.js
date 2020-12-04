// Create an object and count evry letter
const letter = ['a', 'z', 'c', 'e', 'c', 'a', 'z', 'a'];
const countLetters = {};

letter.forEach(item => {
    if(countLetters[item]){
        countLetters[item]++
    }else{
        countLetters[item] = 1;
    }
})
console.log(countLetters);