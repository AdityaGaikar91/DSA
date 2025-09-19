class Stack{
    constructor(data){
        this.top = -1;
        this.size = data
        this.arr = new Array(this.size);
    }

    push(data){
        this.top++;
        
        if(this.top>this.size-1){
            console.log("Stack is full");
            top --;
            return;
        }

        this.arr[this.top] = data;
    }

    pop(){
        if(this.top<0){
            console.log("Stack is Empty");
            return;
        }

        let x = this.arr[this.top]
        this.top --
        return x;
    }
}

function reverse(str){
    let length = str.length;
    const Stack_arr = new Stack(length);

    for(let i = 0; i < length; i++){
        Stack_arr.push(str[i]);
    }

    let reverseString = "";

    for(let i = 0; i<length; i++){
        let x = Stack_arr.pop();
        reverseString = reverseString.concat(x);
    }

    return reverseString;
}

const reverseString = reverse("Internshala");

console.log("Reversed String: ", reverseString);
