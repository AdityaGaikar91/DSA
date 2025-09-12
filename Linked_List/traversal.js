class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

}


let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3);

// Connect Node

head.next = firstNode;
firstNode.next = secondNode;

traverseLinkedList(head);

function traverseLinkedList(head){

    let current = head;

    while(current!=null){
        console.log(current.data)
        current = current.next;
    }
}
