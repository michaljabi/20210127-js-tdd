import { setupGameRules, makeAMove, gameInfo } from './game.js';
import { TheGameComponent } from './TheGameComponent.js';

describe('TheGameComponent', () => {

    it('should be mountable', () => {
        document.body.appendChild(new TheGameComponent({}));
        
        const myComponent = document.querySelector('the-game');
        
        expect(myComponent).toBeTruthy();
    })
    
    it('should render for 3 buttons with proper choices', () => {
        document.body.appendChild(new TheGameComponent({}));
        
        const myButtonR = document.querySelector('#rock');
        const myButtonP = document.querySelector('#paper');
        const myButtonS = document.querySelector('#scissors');
        
        expect(myButtonR).toBeTruthy();
        expect(myButtonP).toBeTruthy();
        expect(myButtonS).toBeTruthy();
    })
    
    it('should allow user to click on the button and show results in box', () => {
        // const choices = ['rock', 'paper', 'scissors']
        setupGameRules({
            'scissors': 'paper',
            'paper': 'rock',
            'rock': 'scissors',
        })
    
        const component = new TheGameComponent({onButtonClick: (choice) => {
            const cpuPlayerChoice = 'scissors';

            const result = makeAMove(choice, cpuPlayerChoice);
            return gameInfo(result, cpuPlayerChoice);            
        } });
        const myBox = component.querySelector('#box');
        const myButtonR = component.querySelector('#rock');
        
        myButtonR.click();
        
        expect(myBox.textContent).toBe('You WIN - computer pick: scissors');
    })
})