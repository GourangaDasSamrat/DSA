#include <string>
#include <unordered_map>

class Solution {
 public:
  int romanToInt(std::string s) {
    // Map Roman numeral characters to their integer values
    std::unordered_map<char, int> romanMap = {
      {'I', 1},
      {'V', 5},
      {'X', 10},
      {'L', 50},
      {'C', 100},
      {'D', 500},
      {'M', 1000}};

    int total = 0;
    // Iterate through the string up to the second to last character
    for (int i = 0; i < s.length() - 1; ++i) {
      // If the current character's value is less than the next one, subtract it
      if (romanMap[s[i]] < romanMap[s[i + 1]]) {
        total -= romanMap[s[i]];
      } else {
        // Otherwise, add it to the total
        total += romanMap[s[i]];
      }
    }
    // Add the value of the last character
    total += romanMap[s.back()];

    return total;
  }
};
