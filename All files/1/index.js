let text = prompt('Введите число');
let num = Number(text);

if (typeof num !== 'number') {
   alert("Упс, кажется, вы ошиблись")
} else if (typeof num == 'number') {
   if (num % 2 == 0) {
      alert('Число ' + num + ' нетное')
   } else if (num % 2 !== 0) {
      alert('Число ' + num + ' нечетное')
   }
}