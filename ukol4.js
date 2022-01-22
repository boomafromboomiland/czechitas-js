let A = Number(prompt('Write any number'));
console.log(A);

let B = Number(prompt('Write any number'));
console.log(B);

let C = Number(prompt('Write any number'));
console.log(C);

if (A > B > C) {
  console.log('The biggest number is A: ' + A  + '.');
} else if (B > A > C) {
  console.log('The biggest number is B: ' + B  + '.');
} else (C > A > B) {
  console.log('The biggest number is C: ' + C  + '.');
}