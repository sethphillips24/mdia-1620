//------------------------- (Assignment 2) -------------------------//
// Seth Phillips A01306781

let stableName = "Skywalker Stables";
let visitorMessage = "Welcome to " + stableName + ", don't lick a gif horse in the mouf";
console.log(visitorMessage);

const horses = [
  {
    name: "JangoFettsHead",
    nickname: "Jango",
    favoriteTreat: "bluechneese",
    age: 9,
    monthlyRent: 8000,
    isInside: true,
    species: "firstclone",
    isRollingAround: true
  },
  {
    name: "Borgzoid",
    nickname: "Borg",
    favoriteTreat: "slurm",
    age: 27,
    monthlyRent: 6500,
    isInside: false,
    species: "zoidborg",
    isAssimilated: true
  },
  {
    name: "WaltuhsAztek",
    nickname: "Waltuh",
    favoriteTreat: "bluemeth",
    age: 14,
    monthlyRent: 5000,
    isInside: true,
    species: "methcook",
    isHeisenberg: true
  }
];

const newHorse = {
  name: "Skywalker",
  nickname: "Ani",
  favoriteTreat: "bluemilk",
  age: 6,
  monthlyRent: 7000,
  isInside: true,
  species: "jedi",
  isChosenOne: true
};
horses.push(newHorse);

horses.forEach(horse => {
  horse.isHungry = true;
});
// now horse always hungry

// output vv

const totalStalls = 8;

//

//function logAvailableStalls() {
//  const available = totalStalls - horses.length;
//  console.log("Available stalls: " + available);
//}
//logAvailableStalls();

function stallsAvailable(totalStalls, numHorses) {
  const available = totalStalls - numHorses;
  console.log("Available stalls: " + available);
}

// stallsAvailable(25, 13);                       // any value. would be room for 12
// stallsAvailable(8, horses.length);             // horses.length is 4 horses. number compounded against horses in array
stallsAvailable(totalStalls, horses.length);   // active, w/ variables

//

function logLateRent(horse) {
  const lateAmount = horse.monthlyRent * 1.2;
  console.log(horse.name + " owes $" + lateAmount + " if rent is paid late.");
}
logLateRent(horses[1]);

function getNickname(horse) {
  console.log(horse.nickname);
}
getNickname(horses[1]);


// Function that returns (not log/update) nickname of said horse
//function getNickname(horse) {
//  return horse.nickname;
//}
//console.log(getNickname(horses[1])); // log return value (array) outside

// horses.push(newObject)
// horses[0].property

// horses.forEach(h => h.newProperty = true)

// vv rem 0 is the array position
// for (let i = 0; i < horses.length; i++) {
//  horses[i].isHungry = true;
//}

//*wushi finger hold*
//skadoosh