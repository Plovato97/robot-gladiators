var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
}

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
// function to start a new game

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerInfo.health > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
 // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    if (promptFight === "fight" || promptFight === "FIGHT") {
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemyHealth = Math.max(0, enemyHealth - damage);

      console.log(
        playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
    }
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    if (promptFight === "fight" || promptFight === "FIGHT") {
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);


    console.log(
      enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
  }
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } 
}; // end of fight function

var startGame = function() {
  // Reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  for (var i = 0; i < enemyNames.length; i++) {
      if (playerInfo.health > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + (i=1));

          var pickedEnemyName = enemyNames[i];

          enemyHealth = randomNumber(40, 60);

          fight(pickedEnemyName);
      if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop()
        }
      }
    }else {
          window.alert("you have lost your robot in battle! Game Over!");
          break;
        }
  }
  // if we're not at the last enemy in the array
  // play again
  endGame();
};

  // function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!")
  // if player is stil alive, Player wins!
  if (playerInfo.health > 0) {
      window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
      window.alert("You've lost your robot in battle.");
  }

  //  ask the player if they'd like to play again
var playAgainConfirm = window.confirm("would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

};

// function to generatre a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) +min);

  return value;
}
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}

var shop = function() {
  console.log("entered the shop");
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch(shopOptionPrompt) {
      case "refill":
      case "REFILL": 
      if (playerInfo.money >= 7) {
        window.alert("Refillin player's Health by 20 for 7 dollars.")
          // increase health and decrease money
          playerInfo.health = playerInfo.health + 20;
          playerInfo.money = playerInfo.money - 7;
      }else {
        window.alert("You don't have enough money!")
      }
        break;
      case "upgrade":
      case "UPGRADE":
        if (playerInfo.money >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
        }else {
          window.alert("You don't have enough money!")
        }
        break;
      case "leave":
      case "LEAVE":
        window.alert("Leaving the store.");
        // Do nothing, sop function will end
        break;
      default:
        window.alert("You did not pick a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
  }
};


// Start the game when the page loads 

startGame();