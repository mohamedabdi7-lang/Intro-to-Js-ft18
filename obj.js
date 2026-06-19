const foodPrices = {
    ugali: 50,
    chapati: 20,
    nyamaChoma: 250
};

// Itarate over keys
for (let food in foodPrices) {
    console.log(`${food}: KES ${foodPrices[food]}`);
};

// Extract keys and values
let keys = Object.keys(foodPrices);
let values = Object.values(foodPrices);

console.log(keys);
console.log(values);

console.log(foodPrices["ugali"]);

foodPrices.kachumbari= 15;
foodPrices["Milk"] = 60;

console.log(foodPrices)