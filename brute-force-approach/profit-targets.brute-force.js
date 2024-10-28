function stockPairs(stocksProfit, target) {
  const pairs = []
  for (let i = 0; i < stocksProfit.length; i++) {
    for (let j = i + 1; j < stocksProfit.length; j++) {
      if (stocksProfit[i] + stocksProfit[j] === target) {
        const matchingPair = [stocksProfit[i], stocksProfit[j]].sort().toString()
        if (!pairs.includes(matchingPair)) {
          pairs.push(matchingPair)
        }
      }
    }
  }
  return pairs.length
}

module.exports = {
  stockPairs,
}