var dieRolls = new Array(4);
var arr = roll(41, 4, 4, 0, 7, 7);
arr.forEach(function (dmg) { return console.log(dmg); });
function roll(attacks, toHit, toWound, rend, save, ward) {
    var arr = new Array(attacks).fill(0);
    var repeats = 1000000;
    var dieRolls = new Array(4);
    for (var i = 0; i < repeats; i++) {
        var damage = 0;
        for (var j = 0; j < attacks; j++) {
            getRandomIntArray(dieRolls);
            if (dieRolls[0] >= toHit &&
                dieRolls[0] != 1 &&
                dieRolls[1] >= toWound &&
                dieRolls[1] != 1 &&
                (dieRolls[2] < save + rend || dieRolls[2] == 1) &&
                dieRolls[3] < ward) {
                damage++;
            }
        }
        arr[damage]++;
    }
    return arr;
}
//between 1-6 (it is a die),into a size 5 array
function getRandomIntArray(rolls) {
    //let seed: number = new Date().getMilliseconds() * (i % 99) + 1;
    for (var i = 0; i < 5; i++) {
        rolls[i] = Math.floor(Math.random() * 6 + 1);
    }
}
