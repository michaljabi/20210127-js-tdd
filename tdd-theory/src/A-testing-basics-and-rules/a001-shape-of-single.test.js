/**
 * WARNING:
 * - test bellow is SILLY, just to show you how simple is "to make" a test automation
 * - normally we do not make that "test if JS works" kind of thing.
 *
 * - However, sometimes there is one silly test (so called: sanity test),
 *   just to make sure that testing env is working.
 *
 *
 *
 * LET Focus on: how to write a good test in the next examples.
 * */

test('should be simple to test 😊 [a001]' , () => {
	expect(10 + 10 + 10).toBe(30);
})
