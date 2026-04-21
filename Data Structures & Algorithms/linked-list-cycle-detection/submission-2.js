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

        const myMap = new Map();
        let index = 0;

        while(head) {
            if(myMap.has(head.next)) {
                return true;
            } else {
                myMap.set(head.next, index);
                index++;
            }
            
            head = head.next;
        }

        return false;
    }
}
