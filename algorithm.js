function knapsack(values, weights, W) {
  const n = values.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;

console.log("0/1 Knapsack result:", knapsack(values, weights, W));

// -----------------------------------

function fractionalKnapsack(values, weights, W) {
  const items = values.map((v, i) => ({
    value: v,
    weight: weights[i],
    ratio: v / weights[i],
  }));

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;

  for (let item of items) {
    if (W >= item.weight) {
      totalValue += item.value;
      W -= item.weight;
    } else {
      totalValue += item.value * (W / item.weight); // گرفتن بخشی از آیتم
      break;
    }
  }

  return totalValue;
}

console.log("Fractional Knapsack result:", fractionalKnapsack(values, weights, W));
