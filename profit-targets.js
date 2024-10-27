function stockPairs(stocksProfit, target) {
  let seen = new Set() // To store all seen profits
  let used = new Set() // To track profits already used in pairs
  let distinctPairsCount = 0

  for (let i = 0; i < stocksProfit.length; i++) {
    const profit = stocksProfit[i]
    const difference = target - profit

    // Check if the complement exists in seen and both values haven't been used
    if (seen.has(difference) && !used.has(profit) && !used.has(difference)) {
      distinctPairsCount++ // Found a valid pair
      used.add(difference) // Mark both as used
      used.add(profit)
    }

    seen.add(profit) // Mark this profit as seen
  }

  return distinctPairsCount
}

module.exports = {
  stockPairs,
}
