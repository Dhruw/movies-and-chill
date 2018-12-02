import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

	render() {
		let movieDetails = this.props.movieDetails;

		return (
			<div className="movieCard">
				<Grid fluid>
					<Row>
						<Col md={4} className="text-center">
							<Link to={`/movie/${movieDetails.id}`}>
								{
									movieDetails.poster_path ?
									<img
									src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
									alt={movieDetails.original_title}
									title="Click here to know more"
									/>
									:
									`Image not available for ${movieDetails.original_title}` 
								}
							</Link>
						</Col>

						<Col md={8}>
							<Link to={`/movie/${movieDetails.id}`}>
								<h3 title="Click here to know more">
									{movieDetails.original_title}
								</h3>
							</Link>
							<hr />
							Rating: {movieDetails.vote_average}  <small>(Based on {movieDetails.vote_count} votes)</small>
							<br />
							Language: {movieDetails.original_language}  	<br />
							Release Date: {movieDetails.release_date}		<br />
							<br />
							<p>
								{movieDetails.overview}
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default MovieCard;