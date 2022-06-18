function hasTargetSum(array, target) {
  // Write your algorithm here
    const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  function findSocks(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  first create an empty array to store the numbers that have already been looped through to avoid using 2 for loops
  then create a for loop that iterates through the array then minus that value from the target then introdude in an 
  if statement to compare if the value we get from after subtracting from the target compares to the numbers we had
  looped through in order to avoid using a second for loop
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
