const { stockPairs } = require("./profit-targets.brute-force")

describe("stockPairs", () => {
  test("Overlapping Pairs", () => {
    const stocksProfit = [5, 7, 5, 7, 5]
    const target = 12
    expect(stockPairs(stocksProfit, target)).toStrictEqual(1)
  })

  test("Basic test case with distinct pairs", () => {
    const stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3]
    const target = 12
    expect(stockPairs(stocksProfit, target)).toBe(3)
  })

  test("Single pair case", () => {
    const stocksProfit = [1, 3, 46, 1, 3, 9]
    const target = 47
    expect(stockPairs(stocksProfit, target)).toBe(1)
  })

  test("No possible pairs", () => {
    const stocksProfit = [10, 20, 30, 40]
    const target = 100
    expect(stockPairs(stocksProfit, target)).toBe(0)
  })

  test("Multiple duplicates but only distinct pairs allowed", () => {
    const stocksProfit = [1, 1, 1, 46, 46, 46]
    const target = 47
    expect(stockPairs(stocksProfit, target)).toBe(1)
  })

  test("Edge case: target zero, all profits zero", () => {
    const stocksProfit = [0, 0, 0, 0, 0]
    const target = 0
    expect(stockPairs(stocksProfit, target)).toBe(1)
  })

  test("Edge case: empty array", () => {
    const stocksProfit = []
    const target = 10
    expect(stockPairs(stocksProfit, target)).toBe(0)
  })

  test("Edge case: target is much larger than profits", () => {
    const stocksProfit = [1, 2, 3, 4, 5]
    const target = 1000000000
    expect(stockPairs(stocksProfit, target)).toBe(0)
  })

 
  /* This is the Edge case in which the brute force approach is extremely inefficient 
  and will take for ever to run the test [remenber ctr + c to kill the process] */
  // test("Large array test case with no distinct pairs", () => {
  //   const stocksProfit = Array(100000).fill(100)
  //   const target = 200
  //   expect(stockPairs(stocksProfit, target)).toBe(1)
  // })
})
