/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
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
var maxDepth = function(root) {
  let result = 0

  function deep(node, depth) {
    if(node === null) {
      result = Math.max(result, depth)
      return
    }
    deep(node.left, depth + 1)
    deep(node.right, depth + 1)
  }

  deep(root, 0)

  return result
};
// @lc code=end

