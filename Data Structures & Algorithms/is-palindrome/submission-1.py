from curses.ascii import isalnum
class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ''
        for element in s:
            if element.isalnum():
                newStr += element.lower()
        return newStr == newStr[::-1]


# 