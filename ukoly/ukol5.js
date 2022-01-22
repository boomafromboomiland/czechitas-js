/*let number = Number(prompt('Write any number'));
let sum = 0;

while (number !== 0) {
  sum = sum + number;
  number = Number(prompt('Write any number'));
  console.log('Sum of your numbers is: ' + sum + '+' + number + '.');
}
*/

for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) {
  console.log(i);
}

let i = 12;
let j = 12 ** 3;

while (i < 12 + j) {
  console.log(i);
  i = i * 2;
}
