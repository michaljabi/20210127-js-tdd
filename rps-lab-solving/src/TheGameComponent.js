// THIS SUPPOSE TO BE REFACTORED (STEP 3 WAS SKIPPED)

export class TheGameComponent extends HTMLElement {
    constructor({onButtonClick}) {
        super()
        this.innerHTML = `
            <h3 id="box"></h3>
            <div>
                <button id="rock">ROCK</button> 
                <button id="paper">PAPER</button> 
                <button id="scissors">SCISSORS</button> 
            </div>
        `
        const h3 = this.querySelector('h3');
        this.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', (ev) => {
                h3.textContent = onButtonClick(ev.target.id)
            })
        } )
    }
}

customElements.define('the-game', TheGameComponent)


// <body><the-game></the-game><body>
