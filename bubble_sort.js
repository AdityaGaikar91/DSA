const arr = [6, 0, 3, 5, 7];
let n = arr.length;
let temp;
let swapped = false;

for (let i = 0; i<n; i++){

    for (let j = 0; j< n-i-1; j++){
        if(arr[j] > arr[j+1]){
            // swap
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;
        }
    }

    if(swapped )
}

