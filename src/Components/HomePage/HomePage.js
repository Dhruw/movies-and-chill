import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

import CarouselBanner from './CarouselBanner/CarouselBanner';
import TrendingList from './TrendingList/TrendingList';
import Message from '../Common/Message/Message';

import API_KEY from '../../key/key';

class HomePage extends React.Component {

	// 0 : Welcome
	// 1 : Loading
	// 2 : Show Results
	// 4 : No Result

	state = {
		trendingMovies: null,
		screenState: 1
	}

	componentDidMount() {
		this.setTrendingMovies();
	}

	setTrendingMovies = () => {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
			.then(response => {
				let trendingMovies = response.data.results
				this.setState({ trendingMovies, screenState: 2 })
			})
			.catch(error => {
				console.log(error)
				this.setState({ screenState: 4 })
			})
	}

	render() {
		switch (this.state.screenState) {
			case 1:
				return <Message
					classes="fa fa-spinner fa-spin"
					message="Loading"
				/>

			case 2:
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
				break;
			default:
				return <Message
					classes="fa fa-frown-o"
					message="Apologies, something went wrong"
				/>

		}
	}
}

export default HomePage;