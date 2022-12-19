const dieRolls: number[] = new Array(4);
const arr = roll(41, 2, 2, 0, 7, 7);
arr.forEach((dmg) => console.log(dmg));

function roll(attacks, toHit, toWound, rend, save, ward): number[] {
  const arr: number[] = new Array(attacks).fill(0);
  const repeats: number = 1000000;
  let dieRolls: number[] = new Array(4);
  for (let i = 0; i < repeats; i++) {
    let damage: number = 0;
    for (let j = 0; j < attacks; j++) {
      getRandomIntArray(dieRolls);
      if (
        dieRolls[0] >= toHit &&
        dieRolls[0] != 1 &&
        dieRolls[1] >= toWound &&
        dieRolls[1] != 1 &&
        (dieRolls[2] < save + rend || dieRolls[2] == 1) &&
        dieRolls[3] < ward
      ) {
        damage++;
      }
    }
    arr[damage]++;
  }
  return arr;
}

//between 1-6 (it is a die),into a size 5 array
function getRandomIntArray(rolls: number[]) {
  //let seed: number = new Date().getMilliseconds() * (i % 99) + 1;
  for (let i = 0; i < 5; i++) {
    rolls[i] = Math.floor(Math.random() * 6 + 1);
  }
}
