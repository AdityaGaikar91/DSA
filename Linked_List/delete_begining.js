class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(2);
let firstNode = new Node(3);
let secondNode = new Node(4);
let thirdNode = new Node(5);
let fourthNode = new Node(6);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;


function deleteAtBegining(){

    if(head == null){
        console.log("List is Empty");
        return
    }
    let temp = head;

    head = head.next;

    temp = null;
}

deleteAtBegining();


function printList(head){
    let cur = head;

    while(cur != null){
        console.log(cur.data)
        cur = cur.next;
    }
}

printList(head);
