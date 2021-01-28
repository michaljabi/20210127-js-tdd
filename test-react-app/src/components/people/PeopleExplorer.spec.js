import React from 'react'
import PeopleExplorer from './PeopleExplorer'
import {render} from '@testing-library/react'

jest.mock('../../service/peopleService', () => ({
	search: () => ({
		cancel: jest.fn(),
		execute: jest.fn(() => Promise.resolve({results: [
				{name: 'Jabba'},
				{name: 'Yoda'}
			]}))
	})
}))

describe( 'PeopleExplorer', () => {

	it( 'should show list of peoples form REST API at startup', (done) => {
		const { container } = render(<PeopleExplorer />)

		setTimeout(() => {
			const elements = container.querySelectorAll('.list-group-item')
			expect(elements.length).toEqual(2)
			expect(elements[0].textContent).toContain('Jabba')
			expect(elements[1].textContent).toContain('Yoda')
	    done()
		}, 0)

	} )
} )
