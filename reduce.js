// const arr = [1, 7, 54, 89, 5, 4, 8, 5, 4];
// const sm = arr.reduce((acc, value) => {
//   if (acc > value) {
//     return acc;
//   } else {
//     return value;
//   }
// });
// console.log(sm);

// const allobt = [
//   {
//     name: "pen",
//     price: 50,
//     amount: 25,
//   },
//   {
//     name: "book",
//     price: 800,
//     amount: 8,
//   },
//   {
//     name: "Notebook",
//     price: 500,
//     amount: 10,
//   },
// ];

// const reduced = allobt.reduce((acc, value) => {
//   return acc + value.price * value.amount;
// }, 1000);
// console.log(reduced);

const votes = ["laptop", "dekstop", "laptop", "mac", "mac", "laptop"];

const myreduse = votes.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
});
// console.log(myreduse);
