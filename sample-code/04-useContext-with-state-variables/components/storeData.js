const data = [
  {
    id: "1",
    title: "Red Shirt",
    price: 19.99,
  },
  {
    id: "2",
    title: "Blue Pant",
    price: 29.99,
  },
  {
    id: "3",
    title: "Green Jacket",
    price: 39.99,
  },
  {
    id: "5",
    title: "Yellow Shoes",
    price: 49.99,
  },
];

export default data;

const currencies = {
  EUR: {
    symbol: "€",
    label: "EUR",
    multiplier: 0.85,
  },
  USD: {
    symbol: "$",
    label: "USD",
    multiplier: 1,
  },
  GBP: {
    symbol: "£",
    label: "GBP",
    multiplier: 0.73,
  },
};

export { currencies };
