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

const availableCoins = [8, 6, 5, 1];
let gol = 11;

const result = calculateCoin(availableCoins, gol);
console.log(result);
