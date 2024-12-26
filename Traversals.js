Preorder Traversal (Root -> Left -> Right)
javascript
Copy code
function preorder(root) {
    if (root) {
        console.log(root.value);  // Process root
        preorder(root.left);     // Recur on left child
        preorder(root.right);    // Recur on right child
    }
}
Inorder Traversal (Left -> Root -> Right)
javascript
Copy code
function inorder(root) {
    if (root) {
        inorder(root.left);      // Recur on left child
        console.log(root.value); // Process root
        inorder(root.right);     // Recur on right child
    }
}
Postorder Traversal (Left -> Right -> Root)
javascript
Copy code
function postorder(root) {
    if (root) {
        postorder(root.left);    // Recur on left child
        postorder(root.right);   // Recur on right child
        console.log(root.value); // Process root
    }
}
Example Usage
javascript
Copy code
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Example Tree:     1
//                  /   \
//                 2     3
//                / \   / \
//               4   5 6   7

const root = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log("Preorder:");
preorder(root); // Output: 1 2 4 5 3 6 7

console.log("Inorder:");
inorder(root); // Output: 4 2 5 1 6 3 7

console.log("Postorder:");
postorder(root); // Output: 4 5 2 6 7 3 1
