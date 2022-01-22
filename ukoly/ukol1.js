console.log('Ahoj :)');

let meno = 'František';
let vek = 31;
let váha = 90; //kg
let výška = 1.82; //m
let BMI = váha / (výška * výška); //váha / výška ** 2

console.log(BMI);
let zaokruhlenie_bmi = Math.round(BMI * 100) / 100;

console.log(
  'Volám sa ' +
    meno +
    ', mám ' +
    vek +
    ' rokov ' +
    ', vážim ' +
    váha +
    'kg' +
    ', meriam ' +
    výška +
    'm' +
    ' a moje BMI je ' +
    zaokruhlenie_bmi +
    '.'
);
