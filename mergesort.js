function split(array) {
  let splitIdx = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, splitIdx);
  let secondHalf = array.slice(splitIdx, array.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let output = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      output.push(arr2[j]);
      j++;
    } else {
      output.push(arr1[i]);
      i++;
    }
  }
  if (i > arr1.length - 1) {
    output.push(...arr2.slice(j));
  } else {
    output.push(...arr1.slice(i));
  }
  // while (i < arr1.length) {
  //     output.push(arr1[i]);
  //     i++;
  // }
  // while (j < arr2.length) {
  //     output.push(arr2[j]);
  //     j++;
  // }
  return output;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  let [left, right] = split(array);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}
