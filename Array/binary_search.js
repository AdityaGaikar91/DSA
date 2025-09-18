/**
 * Binary Search Algorithm
 * binary search only works for sorted array
 */

const arr = [-1,0,3,5,9,12];

let target = -1;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;

    

    while(start <= end){
        let mid = start + Math.floor((end - start)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

const result = binarySearch(arr, target);

(result == -1) ? console.log("Element not found in array") : console.log("Element found in array at index:", result);

/**
 * 
 */