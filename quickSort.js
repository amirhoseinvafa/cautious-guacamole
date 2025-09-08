function quickSort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 0) {
    return copiedArray;
  }

  const biggerElArray = [];
  const smallerElArray = [];

  const pivotElement = copiedArray.shift();
  const centerElArray = [pivotElement];

  while (copiedArray.length) {
    const currentEl = copiedArray.shift();
    if (currentEl === pivotElement) {
      centerElArray.push(currentEl);
    } else if (currentEl < pivotElement) {
      smallerElArray.push(currentEl);
    } else if (currentEl > pivotElement) {
      biggerElArray.push(currentEl);
    }
  }

  const smallerElSortedArray = sort(smallerElArray);
  const biggerElSortedArray = sort(biggerElArray);
  return smallerElSortedArray.concat(centerElArray, biggerElSortedArray);
}

console.log(sort([-3, 1, 10, 100, -3, -10, 22, 15, 54])); // [-10, -3, -3, 1, 10,15, 22, 54, 100]
