import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductList extends Component {

	state = {
		products: [
			{id: 1, title: 'Forks', description: 'New ones', imgUrl: 'https://picsum.photos/id/23/300/300'},
			{id: 2, title: 'iPhone', description: 'Used but good as new!', imgUrl: 'https://picsum.photos/id/3/300/300'},
			{id: 3, title: 'Poster', description: '...with a Bridge', imgUrl: 'https://picsum.photos/id/43/300/300'},
		]
	}

	componentDidMount () {
		// let pretend that we load those product via Ajax here and then setState of: state.products
	}

	render () {
		const { products } = this.state;
		const { title } = this.props;
		return (
			<div className="mt-3">
				<h3>{title}</h3>
				<div className="row mt-2">
					{products.map( ( product ) => (
						<div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
							<ProductCard {...product} />
						</div>)
					)}
				</div>
			</div>
		)
	}
}

export default ProductList
