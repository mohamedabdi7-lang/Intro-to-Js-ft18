// Push and pop
let dishes = ["Ugali", "Nyama choma", "Chapati"];
dishes.push("Mandazi");
console.log(dishes);

dishes.pop();
console.log(dishes);

// shift and unshift
let drinks = ["Tea", "Coffee", "Juice"];
drinks.shift();
console.log(drinks);

drinks.unshift("Soda");
console.log(drinks);

// map
let prices = [50,100,150,200];
discountedPrices = prices.map(price =>  price * 0.5);
console.log(prices)
console.log(discountedPrices);


// filter
let temperatures = [10, 24, 30, 16, 21];
let warmDays = temperatures.filter(temp => temp > 20);
console.log(warmDays);