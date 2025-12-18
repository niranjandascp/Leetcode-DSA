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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    const prefixMap = new Map();
    
    // Base case: sum 0 occurs once
    prefixMap.set(0, 1);

    function dfs(node, currSum) {
        if (!node) return;

        currSum += node.val;

        // Check if there is a path ending here with targetSum
        count += prefixMap.get(currSum - targetSum) || 0;

       
        prefixMap.set(currSum, (prefixMap.get(currSum) || 0) + 1);

       
        dfs(node.left, currSum);
        dfs(node.right, currSum);

       
        prefixMap.set(currSum, prefixMap.get(currSum) - 1);
    }

    dfs(root, 0);
    return count;
};