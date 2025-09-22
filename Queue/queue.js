class Queue{
    constructor(n){
        this.size = n;
        this.queue = new Array(this.size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data){
        if(this.rear == this.size-1){
            console.log("Cannot push element to queue as queue is full");
            return;
        }

        if(this.front == -1) {
            this.front =0;
        }
        this.rear++;
        this.queue[this.rear] = data;
        return;
    }

    dequeue() {
        // Check Whether queue is empty or not
        if(this.isEmpty()){
            console.log('Cannot dequeue any element ')
        }

        for(let i = this.front; i<=this.rear-1; i++){
            this.queue[i] = this.queue[i+1];
        }
        this.queue[this.rear] = null;
        this.rear--;
        return;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        return this.queue[this.front];
    }

    rearr(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return;
        }

        return this.queue[this.rear]
    }

    isEmpty() {
        if (this.rear == -1){
            console.log("Queue is empty");
            return true;
        }
        return false;
    }

    isFull(){
        if(this.rear == this.size -1){
            console.log("queue is full");
            return true;
        }

        return false;
    }

    printElements(){

        if (this.rear == -1){
            console.log("Queue is empty so we cannot print elements");
            return;;
        }
        for(let i = this.front; i<=this.rear; i++){
            console.log(this.queue[i]);
        }
    }
}

let newQueue = new Queue(5);
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
const result = newQueue.peek()
console.log(`First Element in Queue: ${result}`);

console.log("Last Element in the Queue is: ", newQueue.rearr())
newQueue.printElements();

newQueue.isFull()

// console.log(newQueue)

// Time Complexity: O(1)
// Space Complexity: O(1)

// Dequeue

// TC - O(n)
// SP - O(1)