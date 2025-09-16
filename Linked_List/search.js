class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1)
let firstNode = new Node(34);
let secondNode = new Node(89);
let thirdNode = new Node(67);
let fourthNode = new Node(28);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

function SeacrhLinkedList(head, key){
    let current = head;

    while(current!=null){
        if(current.data == key)
            return  true;
        current = current.next
    }
    return false;
}

let result = SeacrhLinkedList(head, 67);

result == true ? console.log("Key found in linked list"): console.log("Key Not Found");