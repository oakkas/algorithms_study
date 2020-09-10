// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Old and new for loop style
function reverse1(str) {
  let reversedStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr = reversedStr + str[i];
  // }

  for (let character of str) {
    reversedStr = character + reversedStr;
  }

  return reversedStr;
}

// Array.prototype.reverse()
function reverse2(str) {
  return str.split('').reverse().join('');
}

function reverse3(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse3('asdf');

module.exports = reverse3;
