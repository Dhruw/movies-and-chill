import React from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap';

class MovieDetail extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Grid fluid style={{
					"background": `url(https://image.tmdb.org/t/p/original/${this.props.movieDetail.backdrop_path})`,
					"background-position": "center top"
				}}>
					<Row>
						<Col>
							<Grid style={{
								"margin-top": "200px",
								"background-color": "#fff",
								"border-radius": "5px",
								"padding-top": "15px"
							}}>
								<Row>
									<Col md={3} className="text-center">
										<img src={`https://image.tmdb.org/t/p/w200/${this.props.movieDetail.poster_path}`} alt={this.props.movieDetail.title} />
									</Col>
									<Col md={9}>
										<h2>
											{this.props.movieDetail.title}
										</h2>
										<hr />
										<p>
											{this.props.movieDetail.overview}
										</p>

										<Table responsive>
											<tbody>
												<tr>
													<td>Rating</td>
													<td>
														{this.props.movieDetail.vote_average}
													</td>
												</tr>
												<tr>
													<td>Language</td>
													<td>
														{this.props.movieDetail.original_language}
													</td>
												</tr>
												<tr>
													<td>Release Date</td>
													<td>
														{this.props.movieDetail.release_date}
													</td>
												</tr>
											</tbody>
										</Table>

									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<Table responsive>
											<tbody>
												<tr>
													{
														this.props.movieCast !== null ?
															this.props.movieCast.map(cast => {
																return (
																	<td onClick={() => this.props.setActorDetails(cast.cast_id)}>

																		<img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
																		<br />

																		Name: {cast.name}   <br />
																		Character: {cast.character}   <br />
																		Gender {cast.gender == "2" ? "Male" : "Female"}   <br />
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



			</React.Fragment>

		)
	}
}

export default MovieDetail;