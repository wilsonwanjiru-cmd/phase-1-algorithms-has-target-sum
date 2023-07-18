function hasTargetSum(array, target) {
  const numSet = new Set(); // Create a set to store the encountered numbers

  for (let num of array) {
    const complement = target - num;

    if (numSet.has(complement)) {
      return true; // Found a pair that sums up to the target
    }

    numSet.add(num);
  }

  return false; // No pair found
}

module.exports = hasTargetSum;


/* 
  Write the Big O time complexity of your function here:
  The time complexity of the hasTargetSum function implementation provided is O(n), where n is the length of the input array.

The function iterates over the array once and performs constant-time operations for each element. It uses a set to store encountered numbers and checks if the complement (target minus the current number) exists in the set.

Since the set has constant-time insertion and lookup operations on average, the overall time complexity of the function is linear, or O(n). The function performs a constant number of operations for each element in the array, resulting in a linear relationship between the input size and the time taken to execute the function.

Therefore, the hasTargetSum function has a linear time complexity, meaning that the time it takes to execute the function grows linearly with the size of the input array.
 
*/

/* 
  Add your pseudocode here:
  1. Create a function called hasTargetSum that takes an array and a target value as parameters.
2. Create an empty set called numSet.
3. Iterate over each number in the array:
   4. Assign the current number to a variable num.
   5. Calculate the complement by subtracting num from the target value.
   6. Check if the complement exists in numSet:
      7. If it does, return true, as a pair that sums up to the target is found.
   8. Add num to numSet.
9. If no pair is found after iterating through the entire array, return false.

 

*/

/*
  Add written explanation of your solution here:
  The hasTargetSum function aims to determine if there exists a pair of numbers in the given array whose sum is equal to the target value.

The function starts by creating an empty set called numSet, which will be used to store encountered numbers. This set will allow for efficient lookup operations.

Next, the function iterates over each number in the array. For each number encountered, it assigns it to a variable num. It then calculates the complement by subtracting num from the target value.

The function checks if the complement exists in numSet by performing a lookup operation. If the complement is found in numSet, it means that a pair of numbers with the desired sum has been found. In this case, the function returns true to indicate that the target sum exists in the array.

If the complement is not found in numSet, the function adds the current num to numSet to track it for future lookups.

If the function completes the loop without finding a pair that sums up to the target, it reaches the end and returns false, indicating that there is no pair with the target sum in the given array.

This solution has a time complexity of O(n), where n is the length of the input array. It iterates over the array once and performs constant-time operations for each element, such as set lookups and insertions. The use of a set allows for efficient membership checks and eliminates the need for nested loops or sorting. As a result, the solution has a linear time complexity, making it efficient for large input arrays.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
//   // add your own custom tests in here: 
// Existing tests...
// describe("hasTargetSum", () => {
//   // Existing tests...

//   // Custom tests
//   it("returns true when the array is [10, 20, 30, 40] and the target is 60", () => {
//     expect(hasTargetSum([10, 20, 30, 40], 60)).to.be.true;
//   });

//   it("returns true when the array is [2, 5, 8, 11, 13] and the target is 15", () => {
//     expect(hasTargetSum([2, 5, 8, 11, 13], 15)).to.be.true;
//   });

//   it("returns false when the array is [1, 3, 5, 7] and the target is 12", () => {
//     expect(hasTargetSum([1, 3, 5, 7], 12)).to.be.false;
//   });
// });

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
