// Without repetition

function getPermutation(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutation(options.slice(1));
  const fistOption = options[0];
  console.log(partialPermutations);
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

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

// function permuteUnique(nums) {
//   const results = [];
//   const used = Array(nums.length).fill(false);
//   nums.sort((a, b) => a - b); // Sort to handle duplicates
//   backtrack([], used);
//   return results;

//   function backtrack(path, used) {
//     if (path.length === nums.length) {
//       results.push([...path]);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (used[i]) continue;
//       if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // Skip duplicates
//       used[i] = true;
//       path.push(nums[i]);
//       backtrack(path, used);
//       path.pop();
//       used[i] = false;
//     }
//   }
// }
