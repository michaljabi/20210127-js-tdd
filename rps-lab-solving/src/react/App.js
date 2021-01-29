import React from 'react';
import { gameInfo, makeAMove, randomChoice, setupGameRules } from '../game'
import rulesProvider from '../game-rules.provider'
import TheGame from './TheGame'

function App() {

    const choices = setupGameRules(rulesProvider.rockPaperScissorsLizardSpockGameRules())

    const handleOptionChosen = (option) => {
      const cpuPlayerChoice = randomChoice();
      const result = makeAMove(option, cpuPlayerChoice);
      return gameInfo(result, cpuPlayerChoice);
    }

    return (
        <main>
           <header>
               <h1>Welcome to the app</h1>
           </header>
           <div>
               <TheGame choices={choices} onOptionChosen={handleOptionChosen} />
           </div>
        </main>
    )
}

export default App;
