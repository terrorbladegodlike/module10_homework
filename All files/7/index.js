let arr = [5, 20, 30, 3, 1, 78, null];

const even = arr.filter(number => {
   return number % 2 == 0 && typeof (number) == 'number';
});

const odds = arr.filter(number => {
   return number % 2 !== 0 && typeof (number) == 'number';
});

const error = arr.filter(number => {
   return typeof (number) !== 'number';
})

console.log("Это четные числа: ", even);
console.log("Это нечетные числа: ", odds);
console.log("Это нулевое значение: ", error);