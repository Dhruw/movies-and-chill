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
		movieDetail: null,
		movieCast: null,
		trendingMovies: null,
		page: 1
	}

	setTrendingMovies = () => {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
			.then(response => {
				let trendingMovies = response.data.results
				this.setState({ trendingMovies })
			})
			.catch(error => {
				console.log(error)
			})
	}

	setActorDetails = actorID => {

		axios.get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}&language=en-US`)
			.then(response => {
				let actorDetail = response.data
				this.setState({ actorDetail })
			})
			.catch(error => {
				console.log(error)
			})
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
					resultStatus: 2,
				})

			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			// <BrowserRouter></BrowserRouter>
			<React.Fragment>
				<Header
					updateSearchText={this.updateSearchText}
					searchFunction={this.searchFunction}
				/>

				{/* {
					this.state.searchResults ?
						<SearchResult
							searchResults={this.state.searchResults}
							setMovieDetails={this.setMovieDetails}
						/>
						:
						null
				}
				*/

				/*
				{
					this.state.actorDetail ?
						<ActorDetail
							actorDetail={this.state.actorDetail}
						/>
						:
						null
				}
				{
					this.state.trendingMovies ?
						<SearchResult
							searchResults={this.state.trendingMovies}
							setMovieDetails={this.setMovieDetails}
						/>
						:
						null
				} */}

				<Route
					path="/movie/:id"
					render={(routeProps) => <MovieDetail
						{...routeProps}
						movieDetail={this.state.movieDetail}
						movieCast={this.state.movieCast}
						setActorDetails={this.setActorDetails}
					/>}
				/>

				<Route
					path="/"
					exact
					render={() => <HomePage
						trendingMovies={this.state.trendingMovies}
						setMovieDetails={this.setMovieDetails}
					/>}
				/>

				<Route
					path="/profile/:id"
					exact
					render={(routeProps) => <ActorDetail
						{...routeProps}
						actorDetail={this.state.actorDetail}
					/>}
				/>

			</React.Fragment>
		);
	}

	componentDidMount() {
		this.setTrendingMovies();
	}
}

export default App;

// https://image.tmdb.org/t/p/w200//xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg
