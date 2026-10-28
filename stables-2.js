// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BORG ##################
//     % %%%%%%% ############### BORG ##################
//      %%%%%%%%% ############## BORG ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ##                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##

//------------------------- (Assignment 2) -------------------------//
// Seth Phillips A01306781

let stableName = "Skywalker Stables";
let visitorMessage = "Welcome to " + stableName + ", don't lick a gif horse in the mouf";
console.log(visitorMessage);

const horses = [
  {
    name: "JangoFettsHead",
    nickname: "Jango",
    favoriteTreat: "chneese",
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

const totalStalls = 8;

function logAvailableStalls() {
  const available = totalStalls - horses.length;
  console.log("Available stalls: " + available);
}
logAvailableStalls();

function logLateRent(horse) {
  const lateAmount = horse.monthlyRent * 1.2;
  console.log(horse.name + " owes $" + lateAmount + " if rent is paid late.");
}
logLateRent(horses[1]);

// Function that returns (does not log) the nickname of a chosen horse
function getNickname(horse) {
  return horse.nickname;
}
console.log(getNickname(horses[1])); // log the return value outside

// horses.push(newObject)
// horses[0].property
// horses.forEach(h => h.newProp = true)