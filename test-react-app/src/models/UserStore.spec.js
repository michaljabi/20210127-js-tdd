import { UserStore } from './UserStore'

describe( 'MobX UserStore', () => {

	let userStore;
	beforeEach(() => {
		userStore = new UserStore();
	})

	it( 'should create store with reactive things empty', () => {
		expect(userStore.email).toEqual('');
		expect(userStore.name).toEqual('');
	} )

	it( 'should provide way to login user', () => {

		userStore.logInUser('JoHN', 'email');

		expect(userStore.email).toEqual('email');
		expect(userStore.name).toEqual('JoHN');
		expect(userStore.isAuth).toBe(true);
	})

	it( 'should provide way to logout', () => {
		// GIVEN:
		userStore.logInUser('JoHN', 'email');
		expect(userStore.isAuth).toBe(true);

		// WHEN:
		userStore.logOutUser();

		// THEN:
		expect(userStore.email).toEqual('');
		expect(userStore.name).toEqual('');
		expect(userStore.isAuth).toBe(false);
	})
} )
