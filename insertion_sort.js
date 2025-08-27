const arr = [19, 2, 3, 17, 23, 10];
let n = arr.length;

function insertionsort(arr, n) {

    let key, j;

    for(let i=1; i<n; i++){
        key = arr[i]
        j = i-1;

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const result = insertionsort(arr, n)
console.log("Result Array",result);


// Time Complexity: O(n^2)
// Space Complexity: O(1)