
describe('The Rock-Paper-Scissors Game', () => {

    it.todo('should accept all games rules at start (setupGameRules)')

    it.todo('should decide about result based on 2-player moves [GAME - DRAW]')

    it.todo('should check if 1st choices is valid')

    it.todo('should check if 2nd choice is valid')

    it.todo.each([
        ['scissors', 'paper'],
        ['paper', 'rock'],
        ['rock', 'scissors'],
    ])('should have [GAME - WIN] when user choice "scissors" and CPU "paper"')

    it.todo('should have [GAME - LOOSE] when user choice "paper" and CPU "scissors" ')

    it.todo('should have randomChoice() by CPU in range of "rock", "paper", "scissors"')

    it.todo('should have result in format: You {game-state} - computer pick: {cpuPlayerPick} ')

    describe('game flow - integration test', () => {
        it.todo('should give us output with game state and CPU choice [RQ-7]')
    })

    /**
     *
     *  => SETUP ??
     *    ['rock', 'paper', 'scissors']
     *
     *  => MOVE
     *  const playerChoice = 'rock';
     *  const cpuChoice = r();
     *
     *  result = move(playerChoice, cpuChoice)
     *
     *  => result, playerChoice, cpuChoice
     */
    // it.todo(' G')
    // test.each([
    //     ['1', 1, '11'],
    //     ['1', 2, '12'],
    //     ['2', 1, '21'],
    //   ])('.add(%s, %i) = %s', (a, b, expected) => {
    //     expect(a + b).toBe(expected);
    //   });




})
