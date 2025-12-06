// Standalone function version
function romanToInt(s) {
    let ans = 0;
    const roman = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        const a = s[i];
        const b = s[i + 1];
        
        if (roman[a] < roman[b]) {
            ans -= roman[a];
        } else {
            ans += roman[a];
        }
    }

    return ans + roman[s[s.length - 1]];
}

// Class version (if needed)
class Solution {
    romanToInt(s) {
        let ans = 0;
        const roman = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
        };

        for (let i = 0; i < s.length - 1; i++) {
            const a = s[i];
            const b = s[i + 1];
            
            if (roman[a] < roman[b]) {
                ans -= roman[a];
            } else {
                ans += roman[a];
            }
        }

        return ans + roman[s[s.length - 1]];
    }
}

// Example usage:
console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXC"));   // 1990