function countVowels() {
    let input = document.getElementById("userInput");
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of input.value){
        if(vowels.includes(char)){
            count++;
        }
    }

    document.getElementById("result").textContent = `Number of vowels: ${count}`
}