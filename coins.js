function calculateCoin(coins, gol) {
  let reminderGol = gol;
  const coinResult = {
    coinValue: {},
    coinCounter: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(reminderGol / coin);
    coinResult.coinValue[coin] = count;
    coinResult.coinCounter += count;
    reminderGol -= coin * count;
  }
  return coinResult;
}

function calculateCoinBruteForce(coin, gol) {
  const result = [];

  for (let i = 0; i < coin.length; i++) {
    result.push(calculateCoin(coin.slice(i), gol));
  }

  let bestPractice = Number.MAX_SAFE_INTEGER;
  let bestPracticeResult;

  for (const el of result) {
    if (el.coinCounter < bestPractice) {
      bestPractice = el.coinCounter;
      bestPracticeResult = el;
    }
  }
  return bestPracticeResult;
}

const availableCoins = [8, 6, 5, 1];
let gol = 11;

// const result = calculateCoin(availableCoins, gol);
const result = calculateCoinBruteForce(availableCoins, gol);

console.log(result);
