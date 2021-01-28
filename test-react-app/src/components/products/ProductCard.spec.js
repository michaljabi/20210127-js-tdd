import React from 'react'
import ProductCard from './ProductCard'
import { render } from '@testing-library/react'

describe( 'ProductCard', () => {

	it( 'should have img url placed in card-img', () => {
		const { container } = render(<ProductCard imgUrl="http://my-super-image-url"/> )

		const imgElement = container.querySelector('.card-img')

		expect(imgElement.src).toContain('http://my-super-image-url')
	} )

	it( 'should render cart title', () => {
		const { container } = render(<ProductCard title="Dryer"/> )

		const titleElement = container.querySelector('.card-title')

		expect(titleElement.textContent).toContain('Dryer')
	} )

	it( 'should render cart description', () => {
		const { container } = render(<ProductCard description="Hello Chicago!"/> )

		const descriptionElement = container.querySelector('.card-text')

		expect(descriptionElement.textContent).toContain('Hello Chicago!')
	} )
} )
