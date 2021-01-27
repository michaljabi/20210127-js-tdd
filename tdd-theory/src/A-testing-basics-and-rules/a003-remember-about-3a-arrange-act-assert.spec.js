/**
 * OK. Lets focus on the way HOW we should write our tests.
 * better approach than a001 😊.
 *
 * What is important?
 *
 * Well, the NAME of the test - it need to express what you wanted to be tested.
 * Try to answer what are you testing and sometimes even - why you are doing it.
 *
 * STRUCTURE of the test should be like: 3x A = Arrange, Act, Assert
 * You do no have to give comments like below (which part is which) - here it is only for showing how it suppose to looks like
 * However, you should stick to this style of (Given/When/Then) structure anywhere possible.
 *
 * It gives readability and focus on particular parts of the test.
 *
 * ASSERT - try to make as little assertions as possible per test.
 * It is sometimes better to split what you test to 2 test cases, instead doing it in one, with many assertions.
 * We will discuss this wider in the next examples, but keep that in mind.
 * It is also better to use .toEqual() / .toBe() assertions as long as possible - to just Keep It Simple!
 *
 * */

test('should result 30 when 10 added to 20 - [a003]' , () => {
	// Arrange / Given
	const numberA = 10;
	const numberB = 20;
	// Act / When
	const result = numberA + numberB;
	// Assert / Then
	expect(result).toBe(30);
})
