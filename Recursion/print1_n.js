function printNumbers(n) {
    if(n>0){
        printNumbers(n-1);
        console.log(n);
    }
}

printNumbers(100);

// Time Complexity: O(n)
// Space Complexity: O(n)