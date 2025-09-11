function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = i;
    for (let j = 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

console.log(selectionSort([2, 5, 8, 3]));
