/**
 * This example shows you mimic to real word - example
 * with afterEach() afterAll() usage.
 *
 * Mostly when e.g.: you connect to DB or open file, or read something from I/O stream
 * afterAll tests you want to close() those types of connections
 * to not make memory leaks etc..
 *
 * */

async function inMemoryDbConnect() {
	return {
		db() {
			const myDb = new Map();
			return {
				collection(name) {
					if(!myDb.has(name)) {
						myDb.set(name, []);
					}
					return myDb.get(name);
				},
				insertOne(collectionName, obj) {
					myDb.set(collectionName, obj);
				},
				get(collectionName, fieldName = '', value = '') {
					let entity;
					myDb.forEach((element) => {
						  if(element[fieldName] === value) {
						  	entity = element;
						  }
					})
					return entity;
				}
			}
		},
		async close() {
			// some closing logic...
		}
	}
}

describe('afterEach and afterAll block [b002]', () => {

	let connection;
	let db;

	beforeAll(async () => {
		connection = await inMemoryDbConnect();
		db = await connection.db();
	});

	// in this simple example it can be also beforeEach - simplified.
	afterEach(async () => {
		// you can comment the line below to check out that test will not work
		db = await connection.db();
	})

	afterAll(async () => {
		await connection.close();
	});

	it('(1) should be cleaned before/after the 2nd test...', () => {
		const insertedUser = db.get('users', 'lastName', 'Doe')
		console.log(insertedUser);

		expect(insertedUser).not.toEqual({id: 1, name: 'Jane', lastName: 'Doe'});
	})

	it('should insert user to DB', () => {
		const collectionName = 'users';
		db.collection(collectionName);
		const myUser = {id: 1, name: 'Jane', lastName: 'Doe'};

		db.insertOne(collectionName, myUser);

		const insertedUser = db.get(collectionName, 'lastName', 'Doe')
		expect(insertedUser).toEqual(myUser);
	})

	it('(2) should be cleaned after the 2nd test...', () => {
		const insertedUser = db.get('users', 'lastName', 'Doe')
		console.log(insertedUser);

		expect(insertedUser).not.toEqual({id: 1, name: 'Jane', lastName: 'Doe'});
	})
})
