// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const withForEach = [];
array.forEach(item => {
  withForEach.push(`${item.username}!`)
})
console.log(withForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map(item => `${item.username}?`);
console.log(arrayMap);

//Filter the array to only include users who are on team: red
const filter = array.filter(user => {
  if(user.team === 'red'){
    return user;
  }
})
console.log(filter);

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, current) => {
  return acc += current.score;
}, 0);

console.log(`Total score is: ${totalScore}`);

// (1), what is the value of i? index of the array
// (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

const newArray = arrayNum.map((num, i) => num * 2)
console.log(newArray);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const items = array.map(user => {
  user.items = user.items.map(item => {
     return `${item}!`;
   });
   return user;
})
console.log(items);
