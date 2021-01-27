 /**
  * This is more "real word" example,
  * where you test something that is from (outer scope) of the "test" function call + callback;
  *
  * You can also imagine that even more "Real" example, will be when we import this:
  * "outerScopedGreetings" into this file, from separate location.
  * */

function outerScopedGreetings(name) {
	return 'Greetings ' + name ;
}

test('second simple test [a002]' , () => {

	 const greet = outerScopedGreetings('Mike');

	 expect(greet).toEqual('Greetings Mike');
})
