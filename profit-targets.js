function stockPairs(stocksProfit, target) {
  let seenSets = new Set()

  for (let i = 0; i < stocksProfit.length; i++) {
    for (let j = i + 1; j < stocksProfit.length; j++) {
      if (stocksProfit[i] + stocksProfit[j] === target) {
        seenSets.add([stocksProfit[i], stocksProfit[j]].sort((a, b) => a - b).join(','))
      }
    }
  }
  return seenSets.size
}

module.exports = {
  stockPairs,
}
