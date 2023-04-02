let arr = [14, 52, 87, 20, 43, 1];

const allElement = arr => arr.every(v => v === arr[0]);

console.log(allElement(arr));