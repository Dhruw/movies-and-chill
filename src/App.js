import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import ActorDetail from './Components/ActorDetail/ActorDetail';
import HomePage from './Components/HomePage/HomePage';
import Message from './Components/Common/Message/Message';

import API_KEY from './key/key';

class App extends Component {

	// 0 : Welcome
	// 1 : Loading
	// 2 : Show Results
	// 4 : No Result

	state = {
		searchResults: null,
		searchText: "",
		screenState: 0,
		page: 1
	}

	updateSearchText = (event) => {
		this.setState({ searchText: event.target.value })
	}

	searchFunction = (page = 1) => {
		this.setState({ screenState: 1 })
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
					screenState: 2,
				})

			})
			.catch(error => {
				console.log(error)
				this.setState({ screenState: 4 })
			})
	}

	render() {
		return (
			<React.Fragment>
				<Header
					updateSearchText={this.updateSearchText}
					searchFunction={this.searchFunction}
				/>

				<Switch>

					<Route
						path="/"
						exact
						component={HomePage}
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
							screenState={this.state.screenState}
						/>}
					/>


					<Route
						path="/movie/:id"
						component={MovieDetail}
					/>

					<Route
						path="/profile/:id"
						exact
						component={ActorDetail}
					/>

					<Route
						exact
						render={() => <Message
							classes="fa fa-exclamation-triangle"
							message="Page Not Found"
						/>
						}
					/>
				</Switch>

			</React.Fragment>
		);
	}

}

export default App;