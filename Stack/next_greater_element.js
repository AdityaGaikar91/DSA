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

function nextGreaterElement(arr){
    
}