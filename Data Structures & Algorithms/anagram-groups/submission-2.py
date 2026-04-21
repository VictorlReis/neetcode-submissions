class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sort_dic = defaultdict(list)

        for s in strs:
            sorted_str = ''.join(sorted(s))

            sort_dic[sorted_str].append(s)

        return list(sort_dic.values())
