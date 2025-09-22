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

    peek(){
        return this.arr[this.top];
    }

    isEmpty() {
        if(this.top<0){
            return true;
        }
        return false;
    }
}

function nextGreaterElement(numbers){
    let Length = numbers.length;
    let new_stack = new Stack(Length);

    new_stack.push(numbers[0]);

    for(let i = 1; i<Length; i++){

        if(new_stack.isEmpty()){
            new_stack.push(numbers[i]);
            continue;
        }

        while(!new_stack.isEmpty() && new_stack.peek() < numbers[i]) {
            let x = new_stack.pop();
            console.log(`${x} - ${numbers[i]}`)
        }

        new_stack.push(numbers[i]);
    }

    while(!new_stack.isEmpty()){
        console.log(`${new_stack.pop()} ---> -1`)
    }
}

nextGreaterElement([23, 11, 4, 19]);