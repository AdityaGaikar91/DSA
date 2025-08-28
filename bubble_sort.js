const arr = [6, 0, 3, 5, 7];
let n = arr.length;
let temp;

function bubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped == false) {
      break;
    }
  }
}

bubbleSort(arr, n);
console.log(arr);


// Time Compex