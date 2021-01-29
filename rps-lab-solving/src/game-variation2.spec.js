import { setupGameRules, makeAMove } from './game.js';
import gameRulesProvider from './game-rules.provider.js'

describe('Rock - Paper - Scissors - Lizard - Spock / variation of the Game', () => {
    
    const gameRules = gameRulesProvider.rockPaperScissorsLizardSpockGameRules();
    
    beforeEach(() => {
         setupGameRules(gameRules)
     })
     
    // We suppose to make .each to every DRAW situation !
    it('should be DRAW for lizard - lizard', () => {
        const player1st = 'lizard';
        const player2nd = player1st;

        const result = makeAMove(player1st, player2nd);

        expect(result).toBe('DRAW');
    })
    
    // We suppose to make .each to every WIN situation !
    it('should be WIN for spock - rock', () => {
        
        const player1st = 'spock';
        const cpuPlayer = 'rock';
        
        const result = makeAMove(player1st, cpuPlayer);

        expect(result).toBe('WIN');
    })
    
    // We suppose to make .each to every LOOSE situation !
    it('should be LOOSE dor paper - lizard', () => {
        const player1st = 'paper';
        const cpuPlayer = 'lizard';
        
        const result = makeAMove(player1st, cpuPlayer);

        expect(result).toBe('LOOSE');
    })
})
