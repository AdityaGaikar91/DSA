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