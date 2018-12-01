import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

class SearchResult extends React.Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col md={12}>
						{
							this.props.searchResults.map(
								movieDetails => {
									return (
										<Panel 
											key={movieDetails.id}
											// onClick={this.props.setMovieDetails}
											>
										{/* <Panel key={movieDetails.id}> */}
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
									)
								}
							)
						}
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default SearchResult;



// "vote_count": 2659,
// 									"id": 1927,
// 									"video": false,
// 									"vote_average": 5.4,
// 									"title": "Hulk",
// 									"popularity": 13.656,
// 									"poster_path": "/ogCQV6mnLtCJuiiHtMB83jvSRfY.jpg",
// 									"original_language": "en",
// 									"original_title": "Hulk",
// 									"genre_ids": [
// 										18,
// 										28,
// 										878
// 									],
// 									"backdrop_path": "/biED5BtLphULJdY8deefHOEnVAK.jpg",
// 									"adult": false,
// 									"overview": "Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.",
// 									"release_date": "2003-06-19"
