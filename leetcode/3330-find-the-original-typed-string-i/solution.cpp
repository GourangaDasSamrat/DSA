#include <string>
using namespace std;

class Solution {
 public:
  int possibleStringCount(string word) {
    int count = 1;

    for (int i = 1; i < word.length(); i++) {
      if (word[i] == word[i - 1]) {
        count++;
      }
    }

    return count;
  }
};