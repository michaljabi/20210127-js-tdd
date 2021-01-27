/**
 * Testing components is about testing their behaviour.
 * Then, I do not really care if you are using Angular / React / Svelte / Vue / Ember
 *
 * really... i do not care about your implementation at all
 *
 * All i want to know - how it should behave.
 * We carry on the concept that - after all it is User who interacts with components
 * ... and user uses the browser + mouse + keyboard
 *
 * And that is how it should be tested! - Like a End User would...
 *
 * The best library with jest utils for achieve that is:
 * @see https://testing-library.com/docs/
 *
 * but here, we will start without it - to show you a basic concept of testing Components.
 *
 * Line below is crucial to have JSDOM within this test module!
 * @jest-environment jsdom
 * */

// Sample Component:
class Clicker extends HTMLElement {

	 clickerBtn = null;
	 noSpan = null;
	 clicked = 0;

	 constructor () {
		 super();
		 this.innerHTML = `
		    <h3>This is my Clicker</h3>
		    <div>you clicked <span class="no">0</span> times</div>
		    <button class="clickerBtn">Click!</button>
		 `
		 this.noSpan = this.querySelector('.no')
		 this.clickerBtn = this.querySelector('.clickerBtn')
		 this.clickerBtn.addEventListener('click', () => {
			   this.clicked++;
			   this.noSpan.textContent = String(this.clicked);
		 })
	 }
}
customElements.define('my-clicker', Clicker);

describe('[c010] - how to test DOM component? (Clicker)', () => {

	let component;

	beforeEach(() => {
		component = new Clicker();
	})

	it('should be able to mount to document DOM:', () => {
		document.body.append(new Clicker());

		const clicker = document.querySelector('my-clicker');
		const h3title = clicker.querySelector('h3');

		expect(h3title.textContent).toEqual('This is my Clicker')
	})

	it('should start with counter === 0', () => {
		const counterNo = component.querySelector('.no');

		expect(counterNo.textContent).toEqual('0')
	})

	it('should increase counter by one on each button click', () => {
		const counterNo = component.querySelector('.no');
		const button = component.querySelector('.clickerBtn')

		button.click()
		button.click()
		button.click()

		expect(counterNo.textContent).toEqual('3')
	})

})
