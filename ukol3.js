let meno = prompt('What is your name');
console.log(meno);

let age = Number(prompt('How old are you?'));
console.log(age);

if (age >= 18) {
  console.log(
    'My name is ' +
      meno +
      ', I am ' +
      age +
      ' years old' +
      ' and I can drive a car.'
  );
} else {
  let difference = 18 - age;
  console.log(
    'My name is ' +
      meno +
      ', I am ' +
      age +
      ' years old' +
      ' and I have to wait for ' +
      difference +
      ' years to drive a car.'
  );
}
