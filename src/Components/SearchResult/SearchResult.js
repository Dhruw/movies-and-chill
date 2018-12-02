import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Message from '../Common/Message/Message';
import MovieCard from '../Common/MovieCard/MovieCard';
import Paginations from './Paginations/Paginations';

class SearchResult extends React.Component {
	render() {

		switch (this.props.screenState) {
			case 0:
				return <Message
					classes="fa fa-search-plus"
					message="Welcome. a place to search all movies"
				/>

			case 1:
				return <Message
					classes="fa fa-spinner fa-spin"
					message="Loading"
				/>

			case 2:


				if (this.props.searchResults)
					return (
						<Grid>
							<Row>
								<Col md={12}>
									<div style={{
										'paddingTop': '50px'
									}}>
										{this.props.totalResults} movies found <br />
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

									<div className="text-center">
										<Paginations
											currentPage={this.props.currentPage}
											totalPages={this.props.totalPages}
											totalResults={this.props.searchResults['total-results']}
											searchFunction={this.props.searchFunction}
										/>
									</div>

								</Col>
							</Row>
						</Grid>
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

export default SearchResult;