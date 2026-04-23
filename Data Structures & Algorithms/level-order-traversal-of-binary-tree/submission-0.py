from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        queue = deque()
        queue.append(root)
        result = []

        while queue:
            tamanho = len(queue)
            level = []

            for _ in range(tamanho):
                node = queue.popleft()
                if node:  
                    level.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)
            
            if level:
                result.append(level)
        
        return result


#     3
#    9 20
#k 15 7 11 4

# queue = [9, 20]
#nivel [3] 
# tamanho = 1


        