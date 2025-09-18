class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// let head = null;

let head = new Node(2);
let firstNode = new Node(3);
let secondNode = new Node(4);
let thirdNode = new Node(5);
let fourthNode = new Node(6);

head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;


function deleteAtEnd() {

    //check whether list is empty

    if(head == null){
        console.log("The List is empty")
        return;
    }

    if(head.next == null){
        head = null;
        return
    }

    let cur = head

    while(cur.next.next != null){

        cur = cur.next;

    }
    let endNode = cur.next;
    cur.next = null;

    endNode = null;
}

deleteAtEnd()
// deleteAtEnd()
// deleteAtEnd()

function printList(head){

    let curNode = head;

    while(curNode != null) {
        console.log(curNode.data);
        curNode = curNode.next;
    }
}

printList(head);