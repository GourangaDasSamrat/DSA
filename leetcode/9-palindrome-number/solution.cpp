// This static block speeds up C++ execution in LeetCode
static const int fast_io = []() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    return 0;
}();

class Solution {
public:
    bool isPalindrome(int x) {
        // Optimization: Fast exit for negatives and non-zero multiples of 10
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;
        
        // Single digit optimization
        if (x < 10) return true;

        int revertedNumber = 0;
        // The core logic remains the most efficient: O(log10(n))
        while (x > revertedNumber) {
            revertedNumber = (revertedNumber * 10) + (x % 10);
            x /= 10;
        }

        return x == revertedNumber || x == revertedNumber / 10;
    }
};