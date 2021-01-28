import React, { Component } from 'react'
import peopleService from '../../service/peopleService'
import SearchInputBar from '../common/SearchInputBar';

class PeopleExplorer extends Component {

	state = {
		people: [],
		isLoading: false
	}

	peopleSearch = peopleService.search()

	handleSearchChange = (searchText) => {
		this.setState({isLoading: true})
		this.peopleSearch.cancel()
		this.peopleSearch.execute(searchText)
			.then((res) => {
				this.setState({people: res.results, isLoading: false})
			})
			.catch((error) => {
				 if(!error.isCancelled) {
				 	 this.setState({errorMessage: error.message, isLoading: false})
				 }
			})
	}

	componentDidMount () {
		this.handleSearchChange('')
	}

	componentWillUnmount () {
		this.peopleSearch.cancel();
	}

	render () {
		const { people } = this.state;
		return (
			<div>
				<h2> Star Wars People </h2>
				<SearchInputBar
					placeholder="type in something to search for people..."
					ariaLabel="Searching people"
					onSearchChange={this.handleSearchChange}
				/>
				<ul className="list-group">
					{
						people.map((p) => (<li key={p.name} className="list-group-item"> {p.name} </li>))
					}
				</ul>
			</div>
		)
	}
}

export default PeopleExplorer
