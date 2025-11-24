/**
 * Find the number of possible original strings Alice might have intended to type.
 * 
 * Alice may have pressed a key too long at most once, causing character repetition.
 * We need to count all possible original strings.
 * 
 * @param {string} word - String representing the final output on Alice's screen
 * @return {number} - Total number of possible original strings
 */
function possibleStringCount(word) {
    const n = word.length;
    if (n === 1) {
        return 1;
    }
    
    // Count consecutive groups of same characters
    const groups = [];
    let i = 0;
    
    while (i < n) {
        let j = i;
        // Find the end of current group of same characters
        while (j < n && word[j] === word[i]) {
            j++;
        }
        groups.push(j - i);  // Length of this group
        i = j;
    }
    
    // Calculate total possibilities
    // For each group of length > 1, we can choose to reduce it or not
    // But we can only make this "mistake" at most once
    
    let total = 1;  // The original string itself (no mistake)
    
    // For each group of consecutive same characters with length > 1
    for (const groupLength of groups) {
        if (groupLength > 1) {
            // We can reduce this group to any length from 1 to groupLength-1
            // This represents removing some "extra" characters from holding key too long
            total += groupLength - 1;
        }
    }
    
    return total;
}

// Test with the provided examples
function testSolution() {
    // Example 1: "abbcccc"
    // Groups: [1, 2, 4] (a, bb, cccc)
    // Possibilities: original + (2-1) from "bb" + (4-1) from "cccc" = 1 + 1 + 3 = 5
    console.log(`Example 1: ${possibleStringCount('abbcccc')} (expected: 5)`);
    
    // Example 2: "abcd" 
    // Groups: [1, 1, 1, 1] (no groups > 1)
    // Possibilities: just the original = 1
    console.log(`Example 2: ${possibleStringCount('abcd')} (expected: 1)`);
    
    // Example 3: "aaaa"
    // Groups: [4] (aaaa)
    // Possibilities: original + (4-1) = 1 + 3 = 4
    console.log(`Example 3: ${possibleStringCount('aaaa')} (expected: 4)`);
}

testSolution();