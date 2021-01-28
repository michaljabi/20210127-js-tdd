let choices = [];

function setupGameRules(myChoices) {
    choices = myChoices;
}

function makeAMove(choice1, choice2) {
	if(!choices.includes(choice1)) {
		throw new Error('Invalid Choice: ' + choice1)
	}
	if(!choices.includes(choice2)) {
		throw new Error('Invalid Choice: ' + choice2)
	}
	if(choice1 === choice2){
        return 'DRAW'
	}
  if(
	  (choice1 === 'scissors' && choice2 === 'paper') ||
	  (choice1 === 'paper' && choice2 === 'rock') ||
	  (choice1 === 'rock' && choice2 === 'scissors')
  ) {
  	return 'WIN'
  }
	return 'LOOSE';
}

function randomChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function gameInfo(gameState, playerPick) {
    return `You ${gameState} - computer pick: ${playerPick}`
}

export {
	setupGameRules,
	makeAMove,
	randomChoice,
	gameInfo
}
