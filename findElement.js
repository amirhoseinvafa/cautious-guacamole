function findElement(arr, element, comparatorFn) {
  let index = 0;

  for (const item of arr) {
    if (typeof item === "object" && item != null && comparatorFn(item, element)) {
      return index;
    }
    if (element === item) {
      return index;
    }
    index++;
  }
}

// const array = [100, 20, 32, 44, 5, 34];
const array = [
  { name: "A", age: "45" },
  { name: "B", age: "12" },
  { name: "D", age: "23" },
];

// console.log(findElement(array, 32));
console.log(
  findElement(array, { name: "D", age: "12" }, (i, el) => {
    return i.name === el.name;
  }),
);
