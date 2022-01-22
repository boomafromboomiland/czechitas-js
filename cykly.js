//WHILE

/*let i = 1;

while (i < 3) {
  console.log('Ahoj');
  // i += 1; rovnaký zápis ako ten nižšie
  // i++; rovnaký zápis ako ten nižšie
  i = i + 1;
  break;
}

//while(podmienka {.....})
//hodí sa , keď máme zložitú podmienku

console.log('Koniec');*/

//FOR

/*for(Jedenkrát; podmienka; pokaždé na konci tela) {
  veci, čo sa majú opakovať)
}*/

/*používame, keď vieme, koľkokrát sa to použije
for (let i = 0; i < 4; i++) {
  console.log('i');
}
console.log('Koniec');*/

let amount = prompt('How many times would you like to say Hi?');

for (let i = 0; i < amount; i++) {
  console.log('i');
}
console.log('Koniec');
