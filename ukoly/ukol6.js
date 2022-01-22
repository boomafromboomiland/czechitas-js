function vypisMatematickeOperacie(x, y) {
  let sucet = x + y;
  let rozdiel = Math.abs(x - y);
  let nasobok = x * y;
  let podiel = Math.abs(x / y);

  console.log(
    'Súčet: ' +
      sucet +
      ', ' +
      'rozdiel: ' +
      rozdiel +
      ', ' +
      'násobok: ' +
      nasobok +
      ', ' +
      'podiel: ' +
      podiel +
      '.'
  );
}

let x = Number(prompt('Zadaj x'));
let y = Number(prompt('Zadaj y'));

vypisOperacie(x, y);

function spocitajObsahObdlznika(x, y) {
  let vypocet = x * y;
  return vypocet;
}

// riešenie A
console.log('Obsah obdĺžniku je: ' + spocitajObsahObdlznika(x, y));
// riešenie B
let vypisOperacie = spocitajObsahObdlznika(x, y) + spocitajObsahObdlznika(3, 4);
console.log(vypisOperacie);
