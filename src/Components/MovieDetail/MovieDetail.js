import React from 'react';
import axios from 'axios';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Message from '../Common/Message/Message';

import API_KEY from '../../key/key';

class MovieDetail extends React.Component {

	// 0 : Welcome
	// 1 : Loading
	// 2 : Show Results
	// 4 : No Result

	state = {
		movieDetail: null,
		movieCast: null,
		screenState: 1
	}
	componentDidMount() {
		let movieID = this.props.match.params.id;
		this.getMovieDetails(movieID)
	}

	getMovieDetails(movieID) {
		axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`)
			.then(response => {
				let movieDetail = response.data
				this.setState({ movieDetail })
				this.getCastDetails(movieID)
			})
			.catch(error => {
				console.log(error)
				this.setState({ screenState: 4 })
			})
	}

	getCastDetails = movieID => {
		axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`)
			.then(response => {
				let movieCast = response.data.cast.slice(0, 10)
				this.setState({ movieCast, screenState: 2 })
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

				if (this.state.movieDetail) {
					return (
						<Grid
							fluid
							className="movieDetails-grid"
							style={{
								"background": `url(https://image.tmdb.org/t/p/original/${this.state.movieDetail.backdrop_path})`,
							}}>
							<Row>
								<Col>
									<Grid className="movieDetails-grid-panel" >
										<Row>
											<Col md={3} className="text-center">
												<img src={`https://image.tmdb.org/t/p/w200/${this.state.movieDetail.poster_path}`} alt={this.state.movieDetail.title} />
											</Col>
											<Col md={9}>
												<h2>
													{this.state.movieDetail.title}
													<br className="visible-sm visible-xs" />
													<small>
														{this.state.movieDetail.tagline}
													</small>
												</h2>
												<hr />
												<p>
													{this.state.movieDetail.overview}
												</p>

												<Table responsive>
													<tbody>
														<tr>
															<td>Rating</td>
															<td>
																{this.state.movieDetail.vote_average}
															</td>
														</tr>
														<tr>
															<td>Language</td>
															<td>
																{this.state.movieDetail.original_language}
															</td>
														</tr>
														<tr>
															<td>Release Date</td>
															<td>
																{this.state.movieDetail.release_date}
															</td>
														</tr>
														<tr>
															<td>Budget</td>
															<td>
																${this.state.movieDetail.budget}
															</td>
														</tr>
														<tr>
															<td>Revenue</td>
															<td>
																${this.state.movieDetail.revenue}
															</td>
														</tr>
														<tr>
															<td>Runtime</td>
															<td>
																{this.state.movieDetail.runtime} minutes
													</td>
														</tr>
														<tr>
															<td></td>
															<td>
																<a href={this.state.movieDetail.homepage} target="_blank" rel="noopener noreferrer">
																	Official Site
														</a>

															</td>
														</tr>
													</tbody>
												</Table>

											</Col>
										</Row>
										<Row>
											<Col md={12}>
												<h4>
													Cast
										</h4>
												<Table responsive>
													<tbody>
														<tr>
															{
																this.state.movieCast !== null ?
																	this.state.movieCast.map(cast => {
																		return (
																			<td className="text-center" key={cast.id}>
																				<Link to={`/profile/${cast.id}`}>
																					<img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
																					<br />
																					{cast.name} <br />
																					<small>
																						as
																			</small> <br />
																					{cast.character}
																				</Link>
																			</td>
																		)
																	})
																	:
																	null
															}
														</tr>
													</tbody>
												</Table>
											</Col>
										</Row>
									</Grid>
								</Col>
							</Row>
						</Grid>
					)
				}
				break;
			default:
				return <Message
					classes="fa fa-frown-o"
					message="Apologies, something went wrong"
				/>
		}

	}
}

export default MovieDetail;