const arr = [1, 2, 3, 4, 5];

function getSquare(item) {
  return item * item;
}
var newarr = arr.map(getSquare);
// console.log(newarr);

const newarry = arr.map(function (item) {
  return item * item;
});

// console.log(newarry);
const finalarry = arr.map((item) => item * item);
console.log(finalarry);

var newArr = arr.map(function (item, index, fullArr) {
  // console.log("Item: ", item, " and index: ", index, " Full Array: ", fullArr);
});
var oldobj = ["jhgf", "gyg", "hu", "guy", "huyui", "hghujgv", "ouji"];
var newarr = oldobj.slice(1, 5);
// console.log(newarr);
var newarr2 = oldobj.splice(0, 2, "jueal hossain", "hytfyuuguy");
// console.log(oldobj);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = arr.reduce(func);
function func(acc, value) {
  return acc + value;
}

const sumk = numbers.reduce(function (acc, value) {
  return acc + value;
});

const maxno = numbers.reduce((acc, value) => {
  if (acc > value) {
    return acc;
  } else {
    return value;
  }
});

console.log(maxno);

const object = [
  {
    name: "rumi",
    roll: 92546,
    age: 19,
  },
  {
    name: "jueal",
    roll: 99546,
    age: 21,
  },
  {
    name: "masum",
    roll: 92506,
    age: 20,
  },
];

const totalage = object.reduce((acc, item) => {
  return acc + item.age + item.roll;
}, 0);
console.log(totalage);
