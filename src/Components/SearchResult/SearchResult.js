import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import MovieCard from '../Common/MovieCard/MovieCard';
import Paginations from './Paginations/Paginations';

class SearchResult extends React.Component {
	render() {
		if (this.props.searchResults)
			return (
				<Grid>
					<Row>
						<Col md={12}>
							<div style={{
								'paddingTop': '50px'
							}}>
								{this.props.totalResults} movies found <br/>
								Page {this.props.currentPage} of {this.props.totalPages}
	
							</div>

							{
								this.props.searchResults.map(
									movie => {
										return (
											<MovieCard
												key={movie.id}
												movieDetails={movie}
												setMovieDetails={this.props.setMovieDetails}
											/>

										)
									}
								)
							}

							<Paginations
								// updatePage={this.props.updatePage}
								currentPage={this.props.currentPage}
								totalPages={this.props.totalPages}
								totalResults={this.props.searchResults['total-results']}
								searchFunction={this.props.searchFunction}
							/>

						</Col>
					</Row>
				</Grid>
			)
		else
			return null
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
