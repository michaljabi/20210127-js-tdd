/**
 * OK, lets start simple... inside just this file, using scopes.
 *
 * You know, in Test Driven Development - first - we write the test.
 *
 * Ok, but test of what?
 * - well, that is the point, instead of "start implementing"
 * - we go to: "start to write something that confirms my way of implementing"
 *
 * - so ?
 * - so, you do what you did so far in case of making software...
 * a) Specification / Model
 * b) Plan
 * c) Develop / Write implementation Code
 * d) Test
 *
 * The thing that is changing is the d) Test part.
 * 1st of all, it comes before Develop / Write Code part.
 * 2nd of all. it is AUTOMATED - you do not need to "fire" your logic and console.log everything 😅.
 *
 * TDD Way:
 * a) Specification / Model
 * b) Plan
 * c) Write code to test / Unit Test
 * d) Develop / Write implementation Code
 * e) Refactor / Optimize your solution
 *
 *
 *
 * In that case, we NEED TO KNOW, what we must develop, before even start to making tests.
 *
 * Lets make super simple example first.
 * I will show you what exactly you will have to implement,
 * and show you example test for implementation.
 *
 * - In our system we need to have a decorator function, to take any object and add a "profession"
 * - This function need to behave like that:
 *  -> Object provided to this function should not be mutated
 *  -> Function should return object with a "profession" property and value
 *  -> Both: profession value and object will be provided to function
 *  -> If not given, it should make profession a "unknown"
 *
 * Look, test are like a "behavior documentation"!
 * To start: remove the .skip part
 * */

describe('attachProfession [d001]', () => {


    // Can you implement me please?
    // function attachProfession(user, profession = 'unknown') {       
    //     const userWithProfession = {};
    //     for(let key in user) {
    //         userWithProfession[key] = user[key];
    //     }
    //     userWithProfession.profession = profession;
    //     // user.troll = 'HAHAHA';
    //     return userWithProfession
    // }
    
    // function attachProfession(user, profession = 'unknown') {       
    //     return { ...user, profession }
    // }
    
    function attachProfession(user, profession = 'unknown') {       
        return Object.assign({}, user, {profession})
    }

	it('should attach profession to given object', () => {
		 const user = {name: 'John'};
		 const profession = 'programmer'

		 const decoratedUser = attachProfession(user, profession);

         expect(decoratedUser).toEqual({name: 'John', profession: 'programmer'})
	})

	it('should not mutate given object at all', () => {
		const user = {name: 'Jane'};
		const profession = 'accountant'

        const decoratedUser = attachProfession(user, profession);

		expect(user).not.toBe(decoratedUser)
		expect(user).toEqual({name: 'Jane'})
	})

	it('should decorate with profession = unknown if no profession given', () => {
		const user = {name: 'Richard'};

		const decoratedUser = attachProfession(user);

		expect(decoratedUser).toStrictEqual({name: 'Richard', profession: 'unknown'})
	})

})
