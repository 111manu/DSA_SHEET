/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const inorderPush = (node, numbers) => {
        if (node === null) {
            return;
        }
        inorderPush(node.left, numbers);
        numbers.push(node.val);
        inorderPush(node.right, numbers);
    };

    let numbers = [];
    inorderPush(root, numbers);

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] <= numbers[i]) {
            return false;
        }
    }
    return true;
};
