const arr = [64, 25, 12, 22, 11];
let n = arr.length;
let temp;

function selectionSort(arr, n) {
    
for (let i = 0; i<n; i++){

    let min_index = i;
    for(let j = i+1; j<n; j++){
        if( arr[j] < arr[min_index]){
            min_index = j;
        }
        
    }

    temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i]= temp;

}
return arr;

}

let result = selectionSort(arr, n);
console.log(result);



// Time Complexity: O(n^2)
// Space Complexity: O(1)