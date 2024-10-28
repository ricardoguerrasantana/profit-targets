function stockPairs(stocksProfit, target) {
  let seen = new Set(stocksProfit) // Contains all possible profits for quick lookup
  let used = new Set() // Tracks profits that have already been used in counted pairs
  let distinctPairsCount = 0

  for (let i = 0; i < stocksProfit.length; i++) {
    const profit = stocksProfit[i]
    const difference = target - profit

    // Check if 'difference' exists in 'seen' and if neither value has been used in a pair
    if (seen.has(difference) && !used.has(profit) && !used.has(difference)) {
      distinctPairsCount++ // Increment count for a valid, distinct pair
      used.add(difference) // Mark 'difference' as used
      used.add(profit) // Mark 'profit' as used
    }
  }

  return distinctPairsCount
}

module.exports = {
  stockPairs,
}
