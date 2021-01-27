describe('[c008] how to test if something throws an error (seeYaNever) ', () => {

	function seeYaNever() {
		throw new Error('Now you see me..');
	}

	// WRONG!:
	// This will fail the test because that is the "under the hood" mechanics
	// of how assertion works (if they fail - throw an error)
	/*

		it('should throw an error', () => {
			seeYaNever();
	  })

	 */
	 // Instead: you need to wrap the call() with another function

	it('should throw an \'Now you see me..\' error', () => {


		// You should choose one of the options below:
		expect(() => seeYaNever()).toThrow();
		expect(() => { seeYaNever() }).toThrow();
		expect(() => seeYaNever()).toThrow(Error);
		expect(() => seeYaNever()).toThrow(new Error('Now you see me..'))
		expect(() => seeYaNever()).toThrowError('Now you see me..');
		expect(() => seeYaNever()).toThrowError(/see/);
	})


	describe('redactMessage', () => {

		function redactMessage(message, keywordsToRemove = []) {
			if(typeof message !== 'string') {
				 throw new Error('Given message must be a string')
			}
			if(!Array.isArray(keywordsToRemove)) {
				 throw new Error('Given keywordsToRemove must be an array')
			}

			let transformed = message;
			for(const word of keywordsToRemove) {
				transformed = transformed.replaceAll(' '+word+' ', '');
			}
			return transformed;
		}


		it('should throw an error if message other than string given', () => {

			expect(() => {
				redactMessage(12375, [])
			}).toThrowError('Given message must be a string')
		})

		it('should throw an error if given keywordsToRemove are not an array', () => {

			expect(() => {
				redactMessage('some hidden secret', 'secret')
			}).toThrowError('Given keywordsToRemove must be an array')
		})

	})

})
