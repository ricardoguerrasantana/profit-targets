# Stock Profit Pairs

This repository contains a JavaScript solution to the **"Profit Targets"** coding problem. The goal of the problem is to find the number of distinct pairs of stocks whose yearly profits sum up to a given target.

## Problem Description

A financial analyst is responsible for a portfolio of profitable stocks represented in an array. Each item in the array represents the yearly profit of a corresponding stock. The analyst gathers all distinct pairs of stocks that reached the target profit. Distinct pairs are pairs that differ in at least one element.

Given an array `stocksProfit`, the task is to find the number of distinct pairs where the sum of each pair's profits is exactly equal to the target profit.

### Example

```javascript
stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3]
target = 12
```

- **Output**: `3`

**Explanation**: There are 3 distinct pairs:

- (5, 7)
- (3, 9)
- (6, 6)

### Constraints

- $1 <= n <= 5 × 10^5$
- $0 <= stocksProfit[i] <= 10^9$
- $0 <= target <= 5 × 10^9$

## Solution

### Approach

We solve the problem using a **Set** to track seen profits and avoid counting duplicates. The algorithm runs in linear time O(n), making it efficient for large inputs.

### JavaScript Solution

```javascript
function stockPairs(stocksProfit, target) {
  let seen = new Set()
  let used = new Set()
  let count = 0

  for (let i = 0; i < stocksProfit.length; i++) {
    let complement = target - stocksProfit[i]

    if (
      seen.has(complement) &&
      !used.has(complement) &&
      !used.has(stocksProfit[i])
    ) {
      count++
      used.add(complement)
      used.add(stocksProfit[i])
    }

    seen.add(stocksProfit[i])
  }

  return count
}
```

### How It Works

1. **Set Usage**: We use two sets:
   - `seen`: To keep track of the profits we've encountered.
   - `used`: To make sure we don't count the same pair multiple times.
2. **Complement Calculation**: For each stock profit, we calculate the complement that would sum to the target. If the complement has already been seen, and the pair hasn't been used, we count it as a valid pair.

3. **Time Complexity**: The solution runs in O(n), where `n` is the number of elements in the `stocksProfit` array, which ensures efficiency even with large inputs.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/ricardoguerrasantana/profit-targets.git
   cd profit-targets
   ```

2. Run the solution:

   - You can test the solution by running the function in a JavaScript environment like Node.js or in the browser's console.

3. Example usage:

   ```javascript
   const stocksProfit = [1, 3, 46, 1, 3, 9]
   const target = 47

   console.log(stockPairs(stocksProfit, target)) // Output: 1
   ```

## License

This project is licensed under the MIT License.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ricardoguerrasantana/profit-targets/issues) if you want to contribute.
