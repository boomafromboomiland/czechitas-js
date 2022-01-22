let odpoveď = prompt('Ako sa máš?');
console.log(odpoveď);

let docasna = prompt('Koľko máš rokov?');
let vek = Number(docasna);
console.log(vek);

// + - * ** / %
let jeZima = false;
let svietiSlniecko = true;
//let vysledok = jeZima && svietiSlniecko; //jeZima a zároveň svietiSlniecko
//false a zároveň true
// && = a
// || = ALEBO
//všetky strany musia byť true, aby boli true &&
let vysledok = jeZima || svietiSlniecko; //stačí ||, aby jedno bola pravda
console.log(vysledok);

//porovnanie === rovná sa, !== nie je rovné
console.log(5 !== 7);

let a = '2'; //reťazec
let b = 2; //Number

console.log(a == b); // == porovná hodnotu, prevádza na rovnaký typ
console.log(a === b); // === neporovnáva hodnotu, ale aj datový typ
