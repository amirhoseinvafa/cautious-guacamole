function binaryFindElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    console.log("RUNNING");
    const middleIdex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (sortedArr[middleIdex] === element) {
      return middleIdex;
    }

    if (sortedArr[middleIdex] < element) {
      startIndex = middleIdex + 1;
    } else {
      endIndex = middleIdex - 1;
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100];
console.log(binaryFindElement(arr, 99)); //O(log n)

//=================================================================================
//Recursive approach
function binaryFindElementRec(sortedArr, element, offset = 0) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const middleIdex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (sortedArr[middleIdex] === element) {
    return middleIdex + offset;
  }

  if (sortedArr[middleIdex] < element) {
    startIndex = middleIdex + 1;
    offset = offset + middleIdex + 1;
  } else {
    endIndex = middleIdex;
  }
  return binaryFindElement(sortedArr.slice(startIndex, endIndex + 1), element, offset);
}

console.log(binaryFindElementRec(arr, 99)); //O(log n)
