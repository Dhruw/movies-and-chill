import React from 'react';
import CarouselBanner from './CarouselBanner/CarouselBanner';
import TrendingList from './TrendingList/TrendingList';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import API_KEY from '../../key/key';

class HomePage extends React.Component {

	state = {
		trendingMovies: null,
	}

	componentDidMount() {
		this.setTrendingMovies();
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

	render() {
		if (this.state.trendingMovies)
			return (
				<React.Fragment>
					<CarouselBanner
						trendingMovies={this.state.trendingMovies.slice(0, 3)}
					/>
					<Grid>
						<Row>
							<Col md={12}>
								<h3 className="text-center">
									Trending Now
								</h3>
								<TrendingList
									movieDetails={this.state.trendingMovies.slice(3)}
								/>
							</Col>
						</Row>
					</Grid>
				</React.Fragment>

			)
		else
			return null
	}
}

export default HomePage;