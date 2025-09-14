function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  const mergedArray = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  while (leftArrIndex < leftSortedArray.length || rightArrIndex < leftSortedArray.length) {
    if (
      //this
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArray.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }
  return mergedArray;
}

console.log(mergeSort([-3, 1, 10, 100, -3, -10, 22, 15, 54])); // [-10, -3, -3, 1, 10,15, 22, 54, 100]
