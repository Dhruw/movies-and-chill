import React from 'react';
import axios from 'axios';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import API_KEY from '../../key/key';

class ActorDetail extends React.Component {

	state = {
		actorDetail: null
	}

	componentDidMount() {
		let actorID = this.props.match.params.id;
		this.getActorDetails(actorID)
	}
	getActorDetails = actorID => {

		axios.get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}&language=en-US`)
			.then(response => {
				let actorDetail = response.data
				this.setState({ actorDetail })
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		let actorDetail = this.state.actorDetail;
		if (actorDetail)
			return (
				<Grid style={{
					"marginTop": "200px",
					"backgroundColor": "#fff",
					"borderRadius": "5px",
					"paddingTop": "15px"

				}}
				>
					<Row>
						<Col md={12}>
							<h3>
								{actorDetail.name}
							</h3>
							<hr />
							<Grid fluid>
								<Row>
									<Col md={3} className="text-center">
										<img src={`https://image.tmdb.org/t/p/w200/${this.state.actorDetail.profile_path}`} alt={actorDetail.name} />
									</Col>
									<Col md={9}>
										<Table>
											<tbody>
												<tr>
													<td>Known For:</td>
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
													<td>IMDB ID:</td>
													<td>
														{actorDetail.imdb_id}
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href={actorDetail.homepage} target="_blank" rel="noopener noreferrer"> Website </a>     <br />
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
		else
			return null
	}
}

export default withRouter(ActorDetail);


// {
// 	"birthday": "1942-07-13",
// 	"known_for_department": "Acting",
// 	"deathday": null,
// 	"id": 3,
// 	"name": "Harrison Ford",
// 	"also_known_as": [
// 	  "Гаррісон Форд",
// 	  "Харрисон Форд",
// 	  "هاريسون فورد",
// 	  "해리슨 포드",
// 	  "ハリソン・フォード",
// 	  "แฮร์ริสัน ฟอร์ด",
// 	  "哈里森·福特",
// 	  "Харисън Форд"
// 	],
// 	"gender": 2,
// 	"biography": "Legendary Hollywood Icon Harrison Ford was born on July 13, 1942 in Chicago, Illinois.  His family history includes a strong lineage of actors, radio personalities, and models.  Harrison attended public high school in Park Ridge, Illinois where he was a member of the school Radio Station WMTH. Harrison worked as the lead voice for sports reporting at WMTH for several years.  Acting wasn’t a major interest to Ford until his junior year at Ripon College when he first took an acting class.  Harrison Ford’s career started in 1964 when he travelled to California in search of a voice-over job. He never received that position, but instead signed a contract with Columbia Pictures where he earned $150 weekly to play small fill in roles in various films.  Through the 60’s Harrison worked on several TV shows including Gunsmoke, Ironside, Kung Fu, and American Style.  It wasn’t until 1967 that Harrison received his first credited role in the Western film, A Time for Killing. Dissatisfied with the meager roles he was being offered, Ford took a hiatus from acting to work as a self-employed carpenter. This seemingly odd diversion turned out to be a blessing in disguise for Harrison’s acting career when he was soon hired by famous film producer George Lucas.  This was a turning point in Harrison’s life that led to him be casted in milestone roles such as Hans Solo and Indiana Jones.  Since his most famous roles in the Star Wars Trilogy and Raiders of the Lost Ark, Harrison Ford has starred in over 40 films.  Many criticize his recent work, saying his performances have been lackluster leading to commercially disappointing films.  Harrison has always worked hard to protect his off-screen private life, keeping details about his children and marriages quite.  He has a total of five children including one recent adoption with third and current wife Calista Flockhart. In addition to acting Harrison Ford is passionate about environmental conservation, aviation, and archeology.",
// 	"popularity": 5.54,
// 	"place_of_birth": "Chicago, Illinois, USA",
// 	"profile_path": "/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg",
// 	"adult": false,
// 	"imdb_id": "nm0000148",
// 	"homepage": null
//   }