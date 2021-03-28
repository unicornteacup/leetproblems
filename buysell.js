var maxProfit = function(prices) {
  let profit = 0;
  let buy = prices[0];
  let sell = 0;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < buy) {
          buy = prices[i];
      }
      if (prices[i] > buy 
         && (prices[i] - buy) > profit) {
          sell = prices[i];
          profit = prices[i] - buy;
      }
      
  }
  return profit;
};