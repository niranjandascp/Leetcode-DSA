class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};

        vector<string> result;

        unordered_map<char, string> mp = {
            {'2',"abc"}, {'3',"def"}, {'4',"ghi"},
            {'5',"jkl"}, {'6',"mno"}, {'7',"pqrs"},
            {'8',"tuv"}, {'9',"wxyz"}
        };

        string current;
        solve(0, digits, mp, current, result);
        return result;
    }

    void solve(int index, string& digits, unordered_map<char, string>& mp,
               string& current, vector<string>& result) {

        if (index == digits.size()) {
            result.push_back(current);
            return;
        }

        string letters = mp[digits[index]];

        for (char ch : letters) {
            current.push_back(ch);
            solve(index + 1, digits, mp, current, result);
            current.pop_back(); 
        }
    }
};