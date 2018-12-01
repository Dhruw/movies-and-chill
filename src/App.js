import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Components/Header/Header';
import SearchResult from './Components/SearchResult/SearchResult';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import ActorDetail from './Components/ActorDetail/ActorDetail';

class App extends Component {

	state = {
		searchResults: null,
		searchText: "",
		movieDetail: null,
		movieCast: null,
		actorDetail: null,
		trendingMovies: null,
		page: 1
	}

	api_key = 'eaac0841ce9cf1954372eec12aa4c724';

	setTrendingMovies = () => {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
		.then(response => {
			let trendingMovies = response.data.results
			this.setState({trendingMovies})
		})
		.catch(error => {
			console.log(error)
		})
	}
	setMovieDetails = movieDetail => {
		this.setState({movieDetail})
		this.setCastDetails(movieDetail.id)
	}

	setCastDetails = movieID => {
		axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${this.api_key}`)
		.then(response => {
			let movieCast = response.data.cast.slice(0,10)
			this.setState({movieCast})
		})
		.catch(error => {
			console.log(error)
		})

	}

	setActorDetails = actorID => {
		
		axios.get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${this.api_key}&language=en-US`)
		.then(response => {
			let actorDetail = response.data
			this.setState({actorDetail})
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
			<React.Fragment>
				<Header
					updateSearchText={this.updateSearchText}
					searchFunction={this.searchFunction}
				/>
				{
					this.state.searchResults ?
					<SearchResult
						searchResults={this.state.searchResults}
						setMovieDetails={this.setMovieDetails}
					/>
					:
					null
				}
				{
					this.state.movieDetail ?
						<MovieDetail
							movieDetail={this.state.movieDetail}
							movieCast={this.state.movieCast}
							setActorDetails={this.setActorDetails}
						/>
						:
						null
				}
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
				}

				
			</React.Fragment>
		);
	}

	componentDidMount() {
		this.setTrendingMovies();
	}
}

export default App;

// https://image.tmdb.org/t/p/w500/ogCQV6mnLtCJuiiHtMB83jvSRfY.jpg
