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

function inorder(node){
    if(node == null) return;

    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
}

inorder(root)


// Time Complexity ---- O(n);
// Space Complexity ---- O(h) h is height of tree O(log n)
// Worst case space complexity --- O(n)