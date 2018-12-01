import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
// 
class TrendingList extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Panel>
					<Panel.Heading>
						{movieDetails.title}  				<br />
					</Panel.Heading>
					<Panel.Body>
						<Grid fluid>
							<Row>
								<Col md={4}>
									<img src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`} alt=""
										// onClick={this.props.setMovieDetails}
										onClick={() => this.props.setMovieDetails(movieDetails)}
									/>
								</Col>

								<Col md={8}>

									{movieDetails.vote_count}  		<br />
									{movieDetails.vote_average}  		<br />
									{movieDetails.popularity}  		<br />
									{movieDetails.poster_path}  		<br />
									{movieDetails.original_language}  	<br />
									{movieDetails.original_title}  	<br />
									{/* "genre_ids": [
													18,
													28,
													878
												], */}
									<img src={`https://image.tmdb.org/t/p/w200/${movieDetails.backdrop_path}`} alt="" />

									{movieDetails.backdrop_path}		<br />
									{movieDetails.adult}				<br />
									{movieDetails.overview}			<br />
									{movieDetails.release_date}		<br />
								</Col>
							</Row>
						</Grid>

					</Panel.Body>
				</Panel>
			</React.Fragment>
		)
	}
}

export default TrendingList;