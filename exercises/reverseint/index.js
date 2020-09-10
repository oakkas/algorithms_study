// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    return (
      parseInt(
        (n * -1)
          .toString()
          .split('')
          .reduce((rev, char) => char + rev, '')
      ) * -1
    );
  } else {
    return parseInt(
      n
        .toString()
        .split('')
        .reduce((rev, char) => char + rev, '')
    );
  }
}

function reverseInt2(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt2;
