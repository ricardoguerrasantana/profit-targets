const { stockPairs } = require("./profit-targets")

test("Sample case 0 test", () => {
  stocksProfit = [1, 3, 46, 1, 3, 9]
  target = 47

  expect(stockPairs(stocksProfit, target)).toStrictEqual([1, 46])
})
