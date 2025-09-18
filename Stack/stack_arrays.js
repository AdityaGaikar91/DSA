const stack_arrays = new Array(5);
let top = -1;
let length = stack_arrays.length

function push(data){
    top++
    if(top > length -1){
        console.log(`Cannot push ${data} as stack is full`);
        top --
        return false;
    }
    stack_arrays[top] = data;
    // console.log(data);
    return true;
}

function pop(){
    if(top<0){
        console.log("Stack is Empty");
        return false;
    }else{
        let x = stack_arrays[top];
        top --;
        return x;
    }
}

function topElement() {
    if(top < 0){
        console.log("Stack is Empty");
        return false;
    }else{
        return stack_arrays[top];
    }
}

function isEmpty(){
    if(top<0){
        console.log("Stack is Empty");
        return true;
    }

    return false;
}

function isFull(){
    if(top == length -1){
        console.log("stack is full");
        return true;
        
    }else{
        return false;
    }
}

push(10)
push(20)
push(30)
push(40)
push(50)
push(60)

const topElementValue = topElement()
console.log("top element is", topElementValue);


isFull();

pop();
pop();
pop();
pop();
pop();
pop();
isEmpty()

function printElement(){
    for(let i = top; i>=0; i--){
        console.log(stack_arrays[i]);
    }
}

printElement();

// T.C. = O(1);
// S.P. = O(n);