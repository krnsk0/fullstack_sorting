function swap(x, y, array) {
  [array[x], array[y]] = [array[y], array[x]];
}

function defaultComparator(a, b) {
  return a > b;
}

function bubbleSort(array, comparator = defaultComparator) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (comparator(array[j], array[j + 1])) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}
