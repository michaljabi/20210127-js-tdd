# Rock - Paper - Scissors
                                                
> Part: 1  
> Our team need to build the Game from scratch.
   

## Glossary:
- _Player_ - _End User_ or _CPU_
- _CPU_ - one of the _Player_ - it is virtual and implemented in game logic
- _End User_ - one of possible _Players_ in Game, a person - Human
- _choice_ - one of possible "action" that _Player_ can play 
- `rock` (short: R) - one of the possible choice, beats: `scissors`
- `paper` (short: P) - one of the possible choice, beats: `rock`
- `scissors` (short: S) - one of the possible choice, beats: `paper`
- _game state_ - one of possible states in game `WIN`, `LOOSE`, `DRAW`
- _1st_ or _2nd_ _-Player_ - indicates player order - important in case of who `WIN` or `LOOSE` game.

## Requirements:
- RQ-1. In Game a _Player_ can pick one of 3 _choices_
- RQ-2. _End User_ can play only with the computer: _CPU_
- RQ-3. After picking a _choice_ by _End User_, second Player (_CPU_) make a random _choice_ of its own.
- RQ-4. There are 3 choices: `rock`, `paper`, `scissors`. Each _choice_ has one that overcomes it, and one that it beats.
- RQ-5. Game Rules:
    - `rock` beats `scissors`
    - `paper` beats `rock`
    - `scissors` beats `paper`
    - same choice means: game is `DRAW`.
- RQ-6. _End User_ ia a _1st-Player_, and game should treat his choices as the one to "compare to" the _CPU_ choices. That will affect _game state_.  
  - For example if _1st-Player_ picks `rock` and _2nd-Player_ (_CPU_) picks `scissors` that is: "rock beats scissors" and _game state_ is `WIN`.  
  - If _End User_ picks `paper` and _CPU_ picks `scissors` that is: "paper is beaten by scissors" and game state is: `LOOSE`.
  - Same _choice_ means: `DRAW`
- RQ-7. _Game round_ ends when _Players_ _choices_ are made and compared. Result in: _game state_ and implicitly shown _choice_ of _CPU_.  
  Example: when _End User_ picks `paper`: "You WIN - computer pick: rock".
- RQ-8. After a round, game still can be continued and each round affect _game state_
- RQ-9. Game should be prepared in `JavaScript` - in `Node.js` platform.
- RQ-10. The target way of delivery the product (Web app / Desktop app / Mobile app) is not decided yet. It will be provided soon.
