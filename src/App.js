import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import ActorDetail from './Components/ActorDetail/ActorDetail';
import HomePage from './Components/HomePage/HomePage';

class App extends Component {

	state = {
		searchResults: null,
		searchText: "",
		movieDetail:
		{
			adult: false,
			backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
			id: 335983,
			original_language: "en",
			original_title: "Venom",
			overview: "Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’.  The Foundation has discov…",
			popularity: 503.845,
			poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
			release_date: "2018-10-03",
			title: "Venom",
			video: false,
			vote_average: 6.5,
			vote_count: 2613
		},
		movieCast: [{
			"cast_id": 10,
			"character": "Eddie Brock / Venom",
			"credit_id": "591f425ac3a368774e039245",
			"gender": 2,
			"id": 2524,
			"name": "Tom Hardy",
			"order": 0,
			"profile_path": "/4CR1D9VLWZcmGgh4b6kKuY2NOel.jpg",
		}, {
			"cast_id": 13,
			"character": "Anne Weying",
			"credit_id": "59cbebd2c3a368773d017419",
			"gender": 1,
			"id": 1812,
			"name": "Michelle Williams",
			"order": 1,
			"profile_path": "/r4HQM2gO9Q7Ti7sJcRE4hcP8ddN.jpg",
		}],
		actorDetail: null,
		trendingMovies: null,
		page: 1
	}

	api_key = 'eaac0841ce9cf1954372eec12aa4c724';

	setTrendingMovies = () => {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
			.then(response => {
				let trendingMovies = response.data.results
				this.setState({ trendingMovies })
			})
			.catch(error => {
				console.log(error)
			})
	}
	setMovieDetails = movieDetail => {
		this.setState({ movieDetail })
		this.setCastDetails(movieDetail.id)
	}

	setCastDetails = movieID => {
		axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${this.api_key}`)
			.then(response => {
				let movieCast = response.data.cast.slice(0, 10)
				this.setState({ movieCast })
			})
			.catch(error => {
				console.log(error)
			})

	}

	setActorDetails = actorID => {

		axios.get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${this.api_key}&language=en-US`)
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
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.state.searchText}&page=${page}`)
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
					path="/movie"
					render={() => <MovieDetail
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
					path="/cast"
					exact
					render={() => <ActorDetail
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
