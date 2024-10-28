# The Profit Targets Problem
This repository provides an efficient JavaScript solution to the **Profit Targets** problem, a common coding challenge that involves finding distinct pairs in an array whose sums equal a given target. This solution leverages hash sets for constant-time lookups, ensuring scalability even with large datasets.

This repository includes both a **brute-force approach** and an **optimized solution**. For a deeper understanding of the solution, you can read the accompanying [Medium article](https://medium.com/@santana.r/02b2ade9f874).

## Getting Started

### Clone the Repository

To clone this repository, use the following command:

```bash
git clone https://github.com/ricardoguerrasantana/profit-targets.git
cd profit-targets
```

### Installation

Ensure you have Node.js installed, then install dependencies with:

```bash
npm install
```

## Example Usage

To use the optimized solution:

```javascript
const { stockPairs } = require('./optimized-solution/profit-targets');

const stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3];
const target = 12;
console.log(stockPairs(stocksProfit, target)); // Expected output: 3
```

## Running Tests

This project includes tests for both the brute-force and optimized solutions. Run tests with:

```bash
npm test
```

## Problem Overview

Given an array of stock profits, the goal is to find **distinct pairs of stocks** that add up to a specified target. A pair is considered distinct if both profits come from different stock entries, even if they share the same values. Order does not matter, so (5,7) and (7,5) are the same pair.

### Example

```javascript
stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3];
target = 12;
```

Output:
- Distinct pairs: (5, 7), (3, 9), and (6, 6)
- Result: `3` pairs

### Constraints

- **1 ≤ n ≤ 5×10⁵**
- **0 ≤ stocksProfit[i] ≤ 10⁹**
- **0 ≤ target ≤ 5×10⁹**

## Solution Explanation

To solve this problem optimally, the solution uses **two hash sets**:
1. **seen**: Tracks profits we’ve encountered.
2. **used**: Ensures each unique pair is only counted once.

By calculating the required complement for each profit (`difference = target - profit`), we can efficiently identify and count valid pairs without duplication.

### Optimized JavaScript Code

```javascript
function stockPairs(stocksProfit, target) {  
  let seen = new Set();  
  let used = new Set();  
  let distinctPairsCount = 0;  
  
  for (let i = 0; i < stocksProfit.length; i++) {  
    const profit = stocksProfit[i];  
    const difference = target - profit;  
  
    if (seen.has(difference) && !used.has(profit) && !used.has(difference)) {  
      distinctPairsCount++;  
      used.add(difference);  
      used.add(profit);  
    }  
  
    seen.add(profit);  
  }  
  
  return distinctPairsCount;  
}
```

### Steps

1. **Initialize Sets**: Create `seen` and `used` to track encountered and used profits.
2. **Loop Through Array**: For each profit, calculate its complement. If both values haven’t been used and the complement is in `seen`, increment the pair count and mark them as used.
3. **Return Result**: Output the total count of distinct pairs.

## Complexity

- **Time Complexity**: `O(n)` – We traverse the array once, and set operations (`add`, `has`) are `O(1)`.
  
## Edge Cases

1. **Duplicate Values**: Ensures duplicate pairs are not double-counted.
2. **No Valid Pairs**: If no pairs sum to the target, the function returns `0`.