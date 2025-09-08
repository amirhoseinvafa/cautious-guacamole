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

function getPermutationsWR(d, r) {}
const digit = [1, 2, 3];
const resultLength = 3;
