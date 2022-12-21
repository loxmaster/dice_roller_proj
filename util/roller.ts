/*
attacker and defenders need to be outside input
need to add modifieres - reroll 1 , reroll all etc...
*/

const dieRolls: number[] = new Array(3);
//0->attack, 1->toHit, 2->toWound, 3->rend, 4->damage
const attacker=[41, 2, 2, 0, 2];
//0->save , 1->ward
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
      isDmg(dieRolls,attacker,defender);
    }
    arr[damage]++;
  }
  return arr;
}

//between 1-6 (it is a die),into a size 5 array
function getRandomIntArray(arr: number[]) {
  //let seed: number = new Date().getMilliseconds() * (i % 99) + 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 6 + 1);
  }
}
function isDmg(dieRolls: number[],att: number[],def: number[]):number{
  let trueDmg=0;
  if( dieRolls[0] < att[1] &&
    dieRolls[0] != 1)
    return 0;
  if( dieRolls[1] < att[2] &&
        dieRolls[1] != 1)
    return 0;
  if(dieRolls[2] < def[0] + att[3] || dieRolls[2] == 1){
    if(def[1]==7)
      return att[4]+trueDmg;
    return wardSave(att[4]+trueDmg,def[1]);
  }
    
  return 0;
}

function wardSave(wounds,ward):number{
  let dmg:number=0;
  const arr:number[]=new Array(wounds);
  getRandomIntArray(arr);
  for(let i=0;i<wounds;i++){
    if(arr[i]<ward)
      dmg++
  }
  return dmg
}