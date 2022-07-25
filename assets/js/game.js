var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

// You cna also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Player Income 
var playerMoney = 10;

var fight = function() {
    //Alert Players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");
}

var promptFight = window.prompt("would you like to FIGHT or SKIP this batttle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight == "FIGHT" || promptFight == "Fight") {
    //rremove enemy's health by subtracting the amount set in the playerAttack variable
   
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth~ variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
    );

//check enemy's health 
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

//Removed player's health by subtracting the amount set in the enemyAttack variable

    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` varriable
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

//if player choses to skip 
} else if (promptFight === 'skip' || promptFight === "SKIP" || promptFight == "Skip") {
    //Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), Ask question again by running fight() again
    else {
        fight ();
    }
}
else {
    window.alert("You need to chose a valid option. Try again!");
}
fight ()