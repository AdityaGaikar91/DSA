const arr = ["fruits", 1, 4, [2, 3]];;

let a = new Array("fruits", 3, 4, "two");

console.log(arr);
console.log(a);

console.log(arr[2]);
console.log(a[1]);

arr[1] = 45;


arr.push(7)


arr.unshift(-1)



arr.pop();

arr.shift();

console.log(arr);

const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));