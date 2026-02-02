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
 * @return {number}
 */
var longestZigZag = function(root) {
        let ans = 0;

    function dfs(node) {
        if (!node) return [-1, -1]; // [L, R]

        const [leftL, leftR] = dfs(node.left);
        const [rightL, rightR] = dfs(node.right);


        const L = 1 + leftR;
        const R = 1 + rightL;

        ans = Math.max(ans, L, R);

        return [L, R];
    }

    dfs(root);
    return ans;
};