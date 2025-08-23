const a = [3, 6, 7, 1, 2];

let max = a[0];
let min = a[0];

for (let i =0; i<a.length; i++){
    if (a[i] > max){
        max = a[i];
    }

    if (a[i] < min){
        min = a[i];
    }
}

console.log("Maximum no. is", max);
console.log("Minimum no. is", min);