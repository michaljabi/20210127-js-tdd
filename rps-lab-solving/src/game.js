let choices = [];
let gameRules = {}

function setupGameRules(rules) {
    choices = Object.keys(rules);
    gameRules = rules;
}

function invalidChoiceError(choice) {
    if(!choices.includes(choice)) {
        throw new Error('Invalid Choice: ' + choice)
    } 
}

function makeAMove(choice1, choice2) {
    invalidChoiceError(choice1);
    invalidChoiceError(choice2);
    if(choice1 === choice2){
        return 'DRAW'
    }
    const isWin = gameRules[choice1] === choice2;
    return isWin ? 'WIN' : 'LOOSE';
}

function randomChoice() {
    const index = Math.floor(Math.random() * choices.length);
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
