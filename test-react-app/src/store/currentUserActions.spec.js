import { logInUser, logOutUser, USER_LOG_IN, USER_LOG_OUT } from './currentUserActions'

describe( 'currentUserActions', () => {

	it( 'should provide proper logInUser action', () => {

			const result = logInUser('John', 'john@wp.pl');

			expect(result).toEqual({email: 'john@wp.pl', name: 'John', type: USER_LOG_IN})
	} )

	it( 'should provide proper logOutUser action', () => {

		const result = logOutUser();

		expect(result).toEqual({type: USER_LOG_OUT})
	} )
} )
