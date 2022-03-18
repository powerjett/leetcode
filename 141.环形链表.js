/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false
    var fast = head
    var slow = head

    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if(fast === slow) {
        return true
      }
    }

    return false
};
// @lc code=end

