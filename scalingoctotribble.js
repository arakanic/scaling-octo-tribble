// This function calculates the average of the numbers in a given list.

function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((s, i ) => s + i, 0) / array.length
  }