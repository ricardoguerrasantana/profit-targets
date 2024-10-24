function stockPairs(stocksProfit, target) {
  let seen = new Set()
  let used = new Set()
  let distinctPairsCount = 0

  for (let i = 0; i < stocksProfit.length; i++) {
    const profit = stocksProfit[i]
    const difference = target - profit;
    if (seen.has(difference) && !used.has(difference) && !used.has(profit)) {
      distinctPairsCount++
      used.add(difference)
      used.add(profit)
    }
    seen.add(profit)
  }

  return distinctPairsCount
}

module.exports = {
  stockPairs,
}
