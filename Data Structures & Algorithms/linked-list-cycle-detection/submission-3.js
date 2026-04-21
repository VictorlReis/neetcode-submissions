/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        // 1, 2, 3 , 4
        // i     j

        const hashSet = new Set();

        while(head) {
            if(hashSet.has(head)) {
                return true;
            }
            hashSet.add(head);
            head = head.next;
        }
        return false;
    }
}
