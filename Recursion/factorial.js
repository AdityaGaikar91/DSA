function factorial(n){

    if(n==1){
        return 1;
    }
    return  n * factorial(n - 1);
}

console.log(factorial(5));

// Time Complexity: O(n);
// Space Complexity: O(n);