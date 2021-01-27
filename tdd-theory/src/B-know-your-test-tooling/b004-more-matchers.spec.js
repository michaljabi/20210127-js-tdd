/**
 *  Jest allow you to use your own matchers.
 *
 *  You can extend the expect() with your own implementation and name.
 *  In syntax:
 *
 *    matcherName(received,...expected) => {message: () => string, pass: boolean}
 *
 *  Lets make some silly matcher to check if some text has or not an emoji.
 *  Written in syntax:
 *
 *  :smile:
 *
 *
 * You can find more matchers to extend your app, check out jest-awesome at #Matchers:
 * @see https://github.com/jest-community/awesome-jest#matchers
 *
 * Just remember about 'readability rule' and in any cases like that extensions - consult your team members.
 * All of the devs working on project in TDD approach - should know about kind of matchers you use and when to use them.
 *
 * In real word, front-end app for example, the most usable are jest-dom matchers,
 * to Match with the DOM Tree nodes / elements.
 *
 * @see https://github.com/testing-library/jest-dom
 * */

expect.extend({
	toHaveEmoji(received, name) {
		const check = received.includes(':' + name + ':');
		if(check) {
			return {
				message: () => `expected "${received}" not to have emoji: :${name}: !`,
				pass: true
			}
		}
		return {
			message: () => `expected "${received}" to have emoji: :${name}: !`,
			pass: false
		}
	}
})

describe('more matchers [b004]', () => {

	it('should have text emoji :smile: ', () => {

		expect('hello world :smile:').toHaveEmoji('smile');
	})

	it('should not have text emoji :muscle: ', () => {

		expect('hello world :smile:').not.toHaveEmoji('muscle');
	})
})
