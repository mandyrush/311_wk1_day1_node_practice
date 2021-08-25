/**
 * Determines whether the number is true or false
 * @param {number} num - the number we are checking
 * @returns a boolean
 */
const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
}

/**
 * Adds all of the numbers in an array together
 * @param {array} arr - the array we are passing in
 * @returns a number
 */
const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((prev, current) => prev + current);
}

/**
 * Checks to see if any two numbers in the array add up to the sum
 * @param {array} arr - the array we are passing in
 * @param {sum} sum - the sum we are looking for
 * @returns a boolean
 */
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

  // Using a loop within a loop
  // for (let i = 0; i < arr.length; i++) {
  //   for (j = 0; j < arr.length; j++) {
  //     return arr[i] + arr[j] === sum;
  //   }
  // }

  //using indexOf to find the difference
  for (let k = 0; k < arr.length; k++) {
    if (arr.indexOf(sum - arr[k]) !== -1) {
      return true;
    }
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}