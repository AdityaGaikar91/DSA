class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;

function insertAtSpecificPoint(prevNode, data){
    let newNode = new Node(data)
    newNode.next = prevNode.next
    prevNode.next = newNode
}

function insert_at_End(data){
    let newNode = new Node(data);

    let currentNode = head;

    while(currentNode.next != null){
        currentNode= currentNode.next;
    }

    currentNode.next = newNode;
}

insert_at_End(9)

insertAtSpecificPoint(firstNode, 6)

function insertNodeInBegining(key){
    let newNode = new Node(key);
    newNode.next = head;
    head = newNode;
}

insertNodeInBegining(22);

function printList(head){
    let currentNode = head;
    while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

printList(head);


// Time Complexity = O(1);

// Space Complexity = O(1);