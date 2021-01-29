import { setupGameRules, makeAMove, randomChoice, gameInfo } from './game.js';
import gameRulesProvider from './game-rules.provider.js'

describe('The Rock-Paper-Scissors Game', () => {

    const gameRules = gameRulesProvider.rockPaperScissorsGameRules();

    beforeEach(() => {
        setupGameRules(gameRules)
     })

    it('should accept all games rules at start (setupGameRules)', () => {
        expect(setupGameRules).toBeTruthy();
    })

    it('should decide about result based on 2-player moves [GAME - DRAW]', () => {

        const player1st = 'rock';
        const player2nd = player1st;

        const result = makeAMove(player1st, player2nd);

        expect(result).toBe('DRAW');
    })

    it('should check if 1st choices is valid', () => {

        const invalidChoice = 'hdgsjhagdjh';
        const cpuChoice = 'rock';

        expect(
            () => makeAMove(invalidChoice, cpuChoice)
        ).toThrow('Invalid Choice: hdgsjhagdjh')
    })

    it('should check if 2nd choice is valid', () => {

        const player1st = 'rock';
        const invalidChoice = 'invalid....';

        expect(
            () => makeAMove(player1st, invalidChoice)
        ).toThrow('Invalid Choice: invalid....')
    })



    it.each([
        ['scissors', 'paper'],
        ['paper', 'rock'],
        ['rock', 'scissors'],
    ])('should have [GAME - WIN] when user choice "scissors" and CPU "paper"', (player1st, player2nd) => {

        const result = makeAMove(player1st, player2nd);

        expect(result).toBe('WIN');
    })

    it('should have [GAME - LOOSE] when user choice "paper" and CPU "scissors" ', () => {

        const player1st = 'scissors';
        const player2nd = 'rock';

        const result = makeAMove(player1st, player2nd);

        expect(result).toBe('LOOSE');
    })

    it('should have randomChoice() by CPU in range of "rock", "paper", "scissors"', () => {
        const cpuPlayerPick = randomChoice();

        expect( ['rock', 'paper', 'scissors']).toContain(cpuPlayerPick);
    })

    it('should have result in format: You {game-state} - computer pick: {cpuPlayerPick} ', () => {
        const player1stPick = 'scissors';
        const cpuPlayerPick = 'paper';
        const result = makeAMove(player1stPick, cpuPlayerPick);

        const message = gameInfo(result, cpuPlayerPick);

        expect(message).toBe('You WIN - computer pick: paper')
    })

    describe('game flow - integration test', () => {
        it('should give us output with game state and CPU choice [RQ-7]', () => {
            setupGameRules(gameRules)
            const player1stChoice = 'scissors';
            const cpuPlayerChoice = randomChoice();

            const result = makeAMove(player1stChoice, cpuPlayerChoice);
            const message = gameInfo(result, cpuPlayerChoice);

            expect(['WIN', 'DRAW', 'LOOSE']).toContain(result);
            expect(cpuPlayerChoice).toBeDefined()
            expect(message).toBeDefined()
        })
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
