#include <string>
#include <vector>

using namespace std;

class Solution {
 public:
  string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty())
      return "";

    // Find minimum length
    int minLen = strs[0].length();
    for (const string& s : strs) {
      minLen = min(minLen, (int)s.length());
    }

    // Character by character comparison
    for (int i = 0; i < minLen; i++) {
      char c = strs[0][i];
      for (int j = 1; j < strs.size(); j++) {
        if (strs[j][i] != c) {
          return strs[0].substr(0, i);
        }
      }
    }

    return strs[0].substr(0, minLen);
  }
};