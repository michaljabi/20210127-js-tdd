import React from 'react'
import SearchInputBar from './SearchInputBar'
import { render, fireEvent } from '@testing-library/react'

describe( 'SearchInputBar', () => {

	it( 'should have proper ariaLabel and placeholder set', () => {
		// Arrange
		const findAria = "hello Aria";
		const findPlaceholder = "Hello Placeholder"
		const { getByPlaceholderText } = render(<SearchInputBar placeholder={findPlaceholder} ariaLabel={findAria} onSearchChange={() => {}} />)
		// Act
		const input = getByPlaceholderText(findPlaceholder)
		// Assert
		expect(input.getAttribute('aria-label')).toBe(findAria)
	})

	it( 'should search for input text after 300s delay', (done) => {
		// Arrange
		const searchChangeSpy = jest.fn();
		const { getByPlaceholderText } = render(<SearchInputBar placeholder="search..." ariaLabel="x" onSearchChange={searchChangeSpy} />)
		const searchInput = getByPlaceholderText('search...')

		// Act
		fireEvent.change(searchInput, { target: {value: 'Jabba'}} )

		// Asserts
		setTimeout(() => {
			// Must be that way because of:
			// https://github.com/facebook/jest/issues/3465
			// additionally "jest.runOnlyPendingTimers()" is not working.
			// jest.mock('lodash/debounce', () => jest.fn(fn => fn)); - also stopped working :(
			expect(searchChangeSpy).toHaveBeenCalledWith('Jabba')
			done();
		}, 350);

	} )

	it( 'should have spyglass emoticon', () => {
		// Given
		const { getByRole } = render(<SearchInputBar placeholder="x" ariaLabel="x" onSearchChange={() => {}} />)

		// When
		const emoji = getByRole('img')

		// Then
		expect(emoji.textContent.trim()).toEqual('🔍');
	})
} )
