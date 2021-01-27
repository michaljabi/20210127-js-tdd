/**
 * Lets now use some @testing-library/dom
 *
 * @jest-environment jsdom
 * */

const { fireEvent } = require('@testing-library/dom')

// Sample Component:
class TodoList extends HTMLElement {

	 list = [];
	 $uiList = null;
	 $inputNewToDo = null;

	 constructor () {
		 super();
		 this.innerHTML = `
	      <h5>My sample todo List</h5>
	      <ul></ul>
				<div>
					<input name="new-todo">
				</div>
		 `
		 this.$uiList = this.querySelector('ul');
		 this.$inputNewToDo = this.querySelector('input[name="new-todo"]');
		 this.$inputNewToDo.addEventListener('keypress', (ev) => {
		 	const {value} = ev.target;
			if(ev.key === 'Enter') {
				this.list.push({title: value, done: false})
				ev.target.value = '';
				this.renderList();
			}
		 })
	 }

	 renderList() {
	 	  this.$uiList.innerHTML = this.list.map(e => `<li>${e.title}</li>`).join('')
	 }
}
customElements.define('todo-list', TodoList);

describe('[c011] - how to test DOM component? (TodoList)', () => {

	let component;

	beforeEach(() => {
		component = new TodoList();
	})

	afterEach(() => {
		// Empty the document body after each test
		document.body.innerHTML = '';
	})

	it('should be able to mount to document DOM:', () => {
		document.body.append(new TodoList());

		const clicker = document.querySelector('todo-list');
		const h3title = clicker.querySelector('h5');

		expect(h3title.textContent).toBe('My sample todo List');
	})

	it('should clean the input when Enter clicked', () => {
		const theInput = component.querySelector('input[name="new-todo"]');

		fireEvent.input(theInput, { target: { value: 'Make a wish list' } })
		fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' })

		expect(theInput.value).toBe('');
	})

	it('should be able to add new todos to list', () => {
		const theInput = component.querySelector('input[name="new-todo"]');
		const theList = component.querySelector('ul');

		fireEvent.input(theInput, { target: { value: 'Make a wish list' } })
		fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' })
		fireEvent.input(theInput, { target: { value: 'Clean the carpet' } })
		fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' })

		expect(theList.innerHTML).toBe('<li>Make a wish list</li><li>Clean the carpet</li>');
	})
})
