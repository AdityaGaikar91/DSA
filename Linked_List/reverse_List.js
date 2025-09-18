class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function push(data){
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

let head = null;

for (let i= 1; i<=5; i++){
    push(i);
}

function reverseList(head){
    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode != null){
        nextNode = currentNode.next
        currentNode.next = prevNode;
        prevNode =currentNode
        currentNode = nextNode;
    }

    return prevNode;
}


const list = reverseList(head);

function printList() {
    let current = list;

    while(current != null){
        console.log(current.data)
        current = current.next;
    }
}

printList()