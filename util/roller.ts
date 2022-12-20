const dieRolls: number[] = new Array(4);
//0->attack, 1->toHit, 2->toWound, 3->rend, 4->damage
const attacker=[41, 2, 2, 0];
const defender=[7,7];
const arr = roll(attacker,defender);
arr.forEach((dmg) => console.log(dmg));

function roll(att,def): number[] {
  const arr: number[] = new Array(att[0]).fill(0);
  const repeats: number = 1000000;
  let dieRolls: number[] = new Array(4);
  for (let i = 0; i < repeats; i++) {
    let damage: number = 0;
    for (let j = 0; j < att[0]; j++) {
      getRandomIntArray(dieRolls);
     /* if (
        dieRolls[0] >= toHit &&
        dieRolls[0] != 1 &&
        dieRolls[1] >= toWound &&
        dieRolls[1] != 1 &&
        (dieRolls[2] < save + rend || dieRolls[2] == 1) &&
        dieRolls[3] < ward
      ) {
        damage++;
      }*/
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

function isDmg(dieRolls,stats){
  if( dieRolls[0] >= toHit &&
    dieRolls[0] != 1)
}