class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = 1
        r = max(piles)
        result = r

        while l <= r:
            speed = (l + r) // 2
            totalTime = 0

            for pile in piles:
                totalTime += math.ceil(float(pile) / speed)
            
            if totalTime <= h:
                result = speed
                r = speed - 1
            else:
                l = speed + 1

        return result
