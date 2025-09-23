class Tree{
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);

function preorder(node){
    if(node == null) return;

    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
}

preorder(root)

