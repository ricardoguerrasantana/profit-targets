function stockPairs(stocksProfit, target) {
  const pairs = []
  
  // const minStockProfit = Math.min(stocksProfit)
  let stocksProfitSet = new Set(stocksProfit)
  
  let seenSet = new Set()
  
  for (const stockProfit of stocksProfitSet) {
    if (seenSet.has(stockProfit)) {
      continue
    }
    if (stocksProfitSet.has(target - stockProfit)) {
      pairs.push([stockProfit, target - stockProfit])
      seenSet.add(stockProfit)
      seenSet.add(target - stockProfit)
    }
  }
  
  return pairs.length
}

module.exports = {
  stockPairs,
}
