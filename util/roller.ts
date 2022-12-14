function roll(attacks, toHit, toWound, rend, save, ward): number[] {
  const arr: number[] = new Array(attacks);
  const repeats: number = 10000;
  let die: number;
  for (let i = 0; i < repeats; i++) {
    for (let j = 0; j < attacks; j++) {}
    die = getRandomInt(i);
  }
  return arr;
}

//between 1-6 (it is a die),into a size 5 array
function getRandomInt(i: number): number {
  let rnd;
  //let seed: number = new Date().getMilliseconds() * (i % 99) + 1;
  rnd = Math.floor(Math.random() * 6 + 1); //6=max-min+1 , 1=min
  return rnd;
}
