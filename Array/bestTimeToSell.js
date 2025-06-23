let prices = [7, 1, 5, 3, 6, 4];
function maxprofit(prices) {
  let finalprofit = 0;
  let tempprofit = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[i] < prices[j]) {
        tempprofit = prices[j] - prices[i];
        if (tempprofit > finalprofit) {
          finalprofit = tempprofit;
        }
        tempprofit = 0;
      }
    }
  }
  return finalprofit;
}

function maxProfitOptimized(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}

let out = maxprofit(prices);
console.log(out);
