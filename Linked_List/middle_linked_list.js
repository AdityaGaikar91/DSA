class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

function push(data){
    let newNode = new Node(data)
    newNode.next = head;
    head = newNode;
}

let head = null;

function findingMiddleLinkedList() {
    let counter = 1;
    let mid = head;

    while(head.next != null){
        head = head.next;
        counter++;

        if(counter % 2 == 0){
            mid = mid.next;
        }
    } 

    return mid;
}

for(let i = 1; i<=5; i++){
    push(i);
}

const middleNode = findingMiddleLinkedList();
console.log("Middle Node", middleNode);

// Time Complexity = O(n)
// Space Complexity = O(1)