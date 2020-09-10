// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let numChunks = Math.ceil(array.length / size);
  outerArray = [];
  for (let i = 0; i < numChunks; i++) {
    outerArray.push(array.slice(i * size, (i + 1) * size));
  }

  return outerArray;
}

function chunk2(array, size) {
  const chunked = [];
  for (let elem of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }

  return chunked;
}

function chunk3(array, size) {
  const outerArray = [];
  let index = 0;

  while (index < array.length) {
    outerArray.push(array.slice(index, index + size));
    index += size;
  }
  return outerArray;
}

module.exports = chunk3;
