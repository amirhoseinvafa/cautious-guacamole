let count = 1;
function fractionalKnapsack(items, cap, itemIndex) {
  count += 1;
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[itemIndex].weight) {
    return fractionalKnapsack(items, cap, itemIndex - 1);
  }

  const sackWithItem = fractionalKnapsack(items, cap - items[itemIndex].weight, itemIndex - 1);
  const sackWithoutItem = fractionalKnapsack(items, cap, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat([items[itemIndex]]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
      count,
    };

    return updatedSack;
  } else {
    return sackWithoutItem;
  }
}

const items = [
  {
    name: "a",
    value: 7,
    weight: 12,
  },
  {
    name: "b",
    value: 3,
    weight: 5,
  },
  {
    name: "c",
    value: 9,
    weight: 2,
  },
  {
    name: "d",
    value: 1,
    weight: 14,
  },
  {
    name: "e",
    value: 4,
    weight: 7,
  },
  {
    name: "f",
    value: 10,
    weight: 11,
  },
  {
    name: "g",
    value: 6,
    weight: 3,
  },
  {
    name: "h",
    value: 2,
    weight: 9,
  },
  {
    name: "i",
    value: 8,
    weight: 6,
  },
  {
    name: "j",
    value: 5,
    weight: 13,
  },
  {
    name: "k",
    value: 12,
    weight: 4,
  },
  {
    name: "l",
    value: 11,
    weight: 10,
  },
  {
    name: "m",
    value: 13,
    weight: 1,
  },
  {
    name: "n",
    value: 14,
    weight: 15,
  },
  {
    name: "o",
    value: 15,
    weight: 8,
  },
];

const maxCap = 10;
console.log(fractionalKnapsack(items, maxCap, items.length - 1));
