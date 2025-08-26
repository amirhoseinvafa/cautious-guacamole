let count = 1;
function fractionalKnapsack(items, cap) {
  count += 1;
  const sack = { items: [], value: 0, weight: 0 };
  let rememberCap = cap;

  for (const el of items) {
    if (rememberCap >= el.weight) {
      for (const sackEl of sack.items) {
        if (el.value < sackEl.value) {
        }
      }
      sack.items.push(el);
      sack.value += el.value;
      sack.weight += el.weight;

      rememberCap -= el.weight;
    }
  }
  return sack;
}

const items = [
  { name: "b", value: 6, weight: 8 },
  { name: "a", value: 3, weight: 3 },
  { name: "c", value: 10, weight: 3 },
  { name: "c1", value: 20, weight: 1 },
  { name: "c2", value: 30, weight: 1 },
  { name: "c3", value: 40, weight: 1 },
];

const maxCap = 8;
console.log(fractionalKnapsack(items, maxCap));
