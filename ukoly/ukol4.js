let A = Number(prompt('Write any number'));
console.log(A);

let B = Number(prompt('Write any number'));
console.log(B);

let C = Number(prompt('Write any number'));
console.log(C);

/*let highest_number = Math.max(A,B,C)
console.log(highest_number);*/

if (A > B && A > C) {
  console.log('The biggest number is A: ' + A + '.');
} else if (B > A && B > C) {
  console.log('The biggest number is B: ' + B + '.');
} else if (C > A && C > B) {
  console.log('The biggest number is C: ' + C + '.');
} else {
  console.log('Some numbers are the same.');
}
