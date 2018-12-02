import React from 'react';
import CarouselBanner from './CarouselBanner/CarouselBanner';
import TrendingList from './TrendingList/TrendingList';
import { Grid, Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {

	render() {
		if (this.props.trendingMovies)
			return (
				<React.Fragment>
					<CarouselBanner
						trendingMovies={this.props.trendingMovies.slice(0, 5)}
						setMovieDetails={this.props.setMovieDetails}
					/>
					<Grid>
						<Row>
							<Col>

								<TrendingList
									movieDetails={this.props.trendingMovies}
									setMovieDetails={this.props.setMovieDetails}
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