var head;

class Node{
    constructor(data){
        this.data = data
        this.next = null;
        this.prev = null;
    }
}

// to basically push node in beginning of List
function pushNode(data){

    let newNode = new Node(data);
    if(head == null){
        head = newNode;
        return;
    }

    newNode.next = head
    head.prev = newNode
    head = newNode;
}

pushNode(1);
pushNode(2);
pushNode(3);

function printList(head){
    let currentNode = head;

    while(currentNode != null){
        console.log(currentNode.data)
        currentNode = currentNode.next;
    }
}

printList(head);