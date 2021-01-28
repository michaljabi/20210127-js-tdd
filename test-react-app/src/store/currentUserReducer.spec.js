import currentUserReducer from './currentUserReducer'
import { logOutUser } from './currentUserActions'

describe( 'Redux currentUserReducer', () => {

	it( 'should provide initial state with isAuth false and no values for name and email', () => {

		   const initialState = currentUserReducer(undefined, {});

		   expect(initialState).toEqual({email: '', isAuth: false, name: ''})
	} )

	it( 'should change isAuth to false and values to "" after logOutUser action', () => {

		const computedState = currentUserReducer(
			{email: 'janina.kowalska', isAuth: true, name: 'Janina'}, logOutUser()
		);

		expect(computedState).toEqual({email: '', isAuth: false, name: ''})
	} )
} )
