import React from 'react';
// import { Panel } from 'react-bootstrap';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

	render() {
		let movieDetails = this.props.movieDetails;

		return (
			<div className="movieCard">
				<Grid fluid>
					<Row>
						<Col md={4} className="text-center">
							<Link to={`/movie/${movieDetails.title}`}>
								<img src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`} alt=""
									onClick={() => this.props.setMovieDetails(movieDetails)}
								/>
							</Link>
						</Col>

						<Col md={8}>
							<h3>
								{movieDetails.original_title}
							</h3>
							<hr />

							{movieDetails.vote_count}  		<br />
							{movieDetails.vote_average}  		<br />
							{movieDetails.popularity}  		<br />
							{movieDetails.original_language}  	<br />
							{movieDetails.adult}				<br />
							{movieDetails.overview}			<br />
							{movieDetails.release_date}		<br />
						</Col>
						<Col md={3}>

						</Col>
						<Col md={9}>

						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default MovieCard;