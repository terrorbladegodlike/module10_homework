let myMap = new Map([
   ['bmw', 5000],
   ['toyota', 2000],
   ['mercedes', 4000],
   ['mazda', 2500]
]);

for (let name of myMap.keys()) {
   console.log('Ключ - ', name,);
}

for (let price of myMap.values()) {
   console.log('Значение - ', price);
}