import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import ActorDetail from './Components/ActorDetail/ActorDetail';
import HomePage from './Components/HomePage/HomePage';

import API_KEY from './key/key';

class App extends Component {

	state = {
		searchResults: null,
		searchText: "",
		page: 1
	}

	updateSearchText = (event) => {
		this.setState({ searchText: event.target.value })
	}

	searchFunction = (page = 1) => {
		this.setState({ resultStatus: 1 })
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&page=${page}`)
			.then(response => {

				// 0 : Welcome
				// 1 : Loading
				// 2 : Show Results
				// 4 : No Result

				this.setState({
					searchResults: response.data.results,
					totalPages: response.data.total_pages,
					totalResults: response.data.total_results,
					currentPage: response.data.page,
					resultStatus: 2,
				})

			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<React.Fragment>
				<Header
					updateSearchText={this.updateSearchText}
					searchFunction={this.searchFunction}
				/>

				<Route
					path="/searchresults"
					render={(routeProps) => <SearchResult
						{...routeProps}
						
						setMovieDetails={this.setMovieDetails}
						searchFunction={this.searchFunction}

						searchResults={this.state.searchResults}
						totalPages={this.state.totalPages}
						totalResults={this.state.totalResults}
						currentPage={this.state.currentPage}
					/>}
				/>


				<Route
					path="/movie/:id"
					component={MovieDetail}
				/>

				<Route
					path="/"
					exact
					component={HomePage}
				/>

				<Route
					path="/profile/:id"
					exact
					component={ActorDetail}
				/>

			</React.Fragment>
		);
	}

}

export default App;

			// https://image.tmdb.org/t/p/w200//xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg
