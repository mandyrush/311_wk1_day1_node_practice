/**
 * Split the string at the delimeter and return the resulting array
 * @param {string} str - the string we are passing in
 * @param {delimiter} delim - the delimeter we are splitting the string on
 * @returns an array
 */
const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

/**
 * Break a string apart at every second letter and return an array of all the pairs
 * @param {string} str - the string we are passing in
 * @returns an array
 */
const pairs = (str) => {
  // write code for strings.pairs
  let strArray = [];
  for (let i = 0; i < str.length; i += 2) {
    strArray.push(str[i] + str[i + 1]);
  }
  return strArray;
}

/**
 * Takes a string, reverses it and returns the new string
 * @param {string} str - the string we are checking
 * @returns the reversed string
 */
const reverse = (str) => {
  // write code for strings.reverse
 return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}