// Without repetition

function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutation(options.slice(1));
  const fistOption = options[0];
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    console.log(partialPermutations);

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);

      permutations.push(permutationInFront.concat([fistOption], permutationAfter));
    }
  }

  return permutations;
}

const todoListItem = [
  "Walk the dog",
  "clean the toilet",
  "buy groceries",
  "order food",
  //   "check emails"
];

console.log(getPermutation(todoListItem).length);

// ====================================================================
// With repetition

function getPermutationsWR(options, length) {
  const permutation = [];

  if (length === 1) {
    return options.map((option) => [option]);
  }

  const partialPermutations = getPermutationsWR(options, length - 1);

  for (const option of options) {
    for (const existingPermutation of partialPermutations) {
      permutation.push([option].concat(existingPermutation));
    }
  }

  return permutation;
}

const digit = [1, 2, 3];
const resultLength = 3;

console.log(getPermutationsWR(digit, resultLength));
