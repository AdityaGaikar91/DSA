const target = 78;

const arr = [34, 56, 64, 34, 8, 34, 89];

let length = arr.length;

const result = linearSearch(arr, target);

function linearSearch(arr, target){
for (let i = 0; i<arr.length; i++){
    if(arr[i] == target){
        return `Element found at index ${i}`;
        break;
    }
}
 return 'Result: Element not Found';

}

console.log("Result: ", result);

// Time Complexity: Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)

// Disadvantages

// for large data set we can't use linear search


/**
 * Advantages
 * Best for Small data sets
 * Does not take any extra space
 * Works on Sorted/Unsorted array
 */