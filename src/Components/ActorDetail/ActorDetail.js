import React from 'react';
import axios from 'axios';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import Message from '../Common/Message/Message';

import API_KEY from '../../key/key';

class ActorDetail extends React.Component {

	// 0 : Welcome
	// 1 : Loading
	// 2 : Show Results
	// 4 : No Result

	state = {
		actorDetail: null,
		screenState: 1,
	}

	componentDidMount() {
		let actorID = this.props.match.params.id;
		this.getActorDetails(actorID)
	}
	getActorDetails = actorID => {

		axios.get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}&language=en-US`)
			.then(response => {
				let actorDetail = response.data
				this.setState({ actorDetail, screenState: 2 })
			})
			.catch(error => {
				console.log(error)
				this.setState({ screenState: 4 })
			})
	}

	render() {
		let actorDetail = this.state.actorDetail;

		switch (this.state.screenState) {
			case 1:
				return <Message
					classes="fa fa-spinner fa-spin"
					message="Loading"
				/>

			case 2:

				if (actorDetail)
					return (
						<Grid className="actor-detail-grid">
							<Row>
								<Col md={12}>
									<h3 className="text-center">
										{actorDetail.name}
									</h3>
									<hr />
									<Grid fluid>
										<Row>
											<Col md={3} className="text-center">
												<a href={`https://www.imdb.com/name/${actorDetail.imdb_id}`} target="_blank" rel="noopener noreferrer" title={`Visit IMD Profile of ${actorDetail.name}`}>
													<img src={`https://image.tmdb.org/t/p/w200/${this.state.actorDetail.profile_path}`} alt={actorDetail.name} />
												</a>
											</Col>
											<Col md={9}>
												<Table>
													<tbody>
														<tr>
															<td style={{
																"minWidth": "140px"
															}}>Known For:</td>
															<td>
																{actorDetail.known_for_department}
															</td>
														</tr>
														<tr>
															<td>Born:</td>
															<td>
																{actorDetail.birthday}

															</td>
														</tr>
														<tr>
															<td>Died:</td>
															<td>
																{actorDetail.deathday}

															</td>
														</tr>
														<tr>
															<td>Gender:</td>
															<td>
																{actorDetail.gender}
															</td>
														</tr>
														<tr>
															<td>Popularity:</td>
															<td>
																{actorDetail.popularity}
															</td>
														</tr>
														<tr>
															<td>Birth Place:</td>
															<td>
																{actorDetail.place_of_birth}
															</td>
														</tr>
														<tr>
															<td>
																Official Website
															</td>
															<td>
																{
																	actorDetail.homepage ?
																	<a href={actorDetail.homepage} target="_blank" rel="noopener noreferrer"> Link </a> 
																	:
																	"-"
																}
															</td>
														</tr>
														<tr>
															<td>Bio:</td>
															<td>
																{actorDetail.biography}    <br />
															</td>
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
				break;
			default:
				return <Message
					classes="fa fa-frown-o"
					message="Apologies, something went wrong"
				/>

		}
	}
}

export default withRouter(ActorDetail);