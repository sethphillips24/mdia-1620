//
//            S K Y W A L K E R   S T A B L E S
//                                  
//                         .''          
//              ._.-.___.' (`\      
//             //(        ( `'        D A N K  F E R R I K
//            '/ )\ ).__. )
//            ' <' `\ ._/'\
//               `   \     \
//

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

//------------------------- Day to day operations (Project) -------------------------//

// 1. Loop that checks if a horse likes a particular treat
const treatToFind = "bluemilk";
let found = false;

for (let i = 0; i < horses.length; i++) {
  if (horses[i].favoriteTreat === treatToFind) {
    console.log(horses[i].name + " likes " + treatToFind + "!");
    found = true;
    break;
  } else {
    console.log(horses[i].name + " does not like " + treatToFind);
  }
}

if (!found) {
  console.log("No horse likes " + treatToFind + ".");
}

// 2. Function that references a unique property via conditional
function checkUniqueProperty(horse) {
  if (horse.isChosenOne) {
    console.log(horse.name + " is the Chosen One.");
  } else if (horse.isAssimilated) {
    console.log(horse.name + " has been assimilated.");
  } else if (horse.isHeisenberg) {
    console.log(horse.name + " is Heisenberg.");
  } else if (horse.isRollingAround) {
    console.log(horse.name + " is rolling around.");
  } else {
    console.log(horse.name + " has no special unique flag.");
  }
}

horses.forEach(horse => checkUniqueProperty(horse));

// 3. Morning - move any number of horses outside
// Only horses that actually move log a message
function moveHorsesOutside(isGettingDark, horsesToMove) {
  horsesToMove.forEach(horse => {
    if (isGettingDark && !horse.isInside) {
      horse.isInside = true;
      console.log(horse.name + " has been called in because it's getting dark.");
    } else if (!isGettingDark && horse.isInside) {
      horse.isInside = false;
      console.log(horse.name + " has been moved outside to spend time in the sun.");
    }
  });
}

moveHorsesOutside(false, [horses[0], horses[2]]); // morning

// Earlier version: morning function using rest parameters
//function moveHorsesOutside(...horsesToMove) {
//  horsesToMove.forEach(horse => {
//    horse.isInside = false;
//    console.log(horse.name + " has been moved outside to spend time in the sun.");
//  });
//}
//moveHorsesOutside(horses[0], horses[2]);

// 4. Food: call outside horses in, then feed everyone
function feedHorses() {
  horses.forEach(horse => {
    if (!horse.isInside) {
      horse.isInside = true;
      console.log(horse.name + " was outside and has been called in.");
    }
    console.log(horse.name + " has been fed " + horse.favoriteTreat + ".");
  });
}

feedHorses();

// 5. Bedtime: morning function updated to call horses in if it's getting dark
moveHorsesOutside(false, [horses[1], horses[3]]); // afternoon out
moveHorsesOutside(true, horses);                  // bedtime

// Earlier version: separate bedtime function
//function bedtimeMoveHorses(isGettingDark, ...horsesToCheck) {
//  horsesToCheck.forEach(horse => {
//    if (isGettingDark && !horse.isInside) {
//      horse.isInside = true;
//      console.log(horse.name + " has been called in because it's getting dark.");
//    }
//  });
//}
//bedtimeMoveHorses(true, horses[1], horses[3]);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

horses.forEach(horse => {
  horse.toggleInside = function () {
    if (this.isInside) {
      this.isInside = false;
      console.log(this.name + " has been moved outside.");
    } else {
      this.isInside = true;
      console.log(this.name + " has been moved inside.");
    }
  };
});

horses[0].toggleInside(); // Jango goes out
horses[0].toggleInside(); // Jango comes back in

//*wushi finger hold*
//skadoosh