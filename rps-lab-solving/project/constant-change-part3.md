# Rock - Paper - Scissors (- Lizard - Spock)

> Part: 3  
> New requirements has arrived!

## Game extension:
After the _Demo_ for the _Client_, our _PO_ brings some news... 

_Client_ really like how the game works, but want to extend its gameplay. Now there will be `2` _Game variants_. Actual `rock-paper-scissors` stays and behaves correctly. Additionally, we need to make another variation of the game: `rock-paper-scissors-lizard-spock`. Which make `2` more _choice_ for _Players_ to pick from.

## Requirements for game extension:
- RQ-3-1. `rock` - `paper` - `scissors` rules remain the same.
- RQ-3-2. `rock` additionally beats `lizard`  
  `paper` additionally beats `spock`  
  `scissors` additionally beats `lizard`
  
- RQ-3-3. `lizard` beats `paper` and `spock`
- RQ-3-4. `spock` beats `rock` and `scissors`

## That give us:
- `rock` beats: `scissors` and `lizard`
- `paper` beats: `rock` and `spock`
- `scissors` beats: `paper` and `lizard`
- `lizard` beats `paper` and `spock`
- `spock` beats `rock` and `scissors`
    
### Now there can be 2 game variants:
- `rock-paper-scissors`
- `rock-paper-scissors-lizard-spock`
