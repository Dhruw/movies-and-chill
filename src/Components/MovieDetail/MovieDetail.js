import React from 'react';
import { Panel } from 'react-bootstrap';

class MovieDetail extends React.Component {

	render() {
		return (
			<div>
				<img src={`https://image.tmdb.org/t/p/w200/${this.props.movieDetail.poster_path}`} alt="" />
				{/* Basic panel example */}
				{this.props.movieDetail.vote_count}  		<br />
				{this.props.movieDetail.vote_average}  		<br />
				{this.props.movieDetail.popularity}  		<br />
				{this.props.movieDetail.poster_path}  		<br />
				{this.props.movieDetail.original_language}  	<br />
				{this.props.movieDetail.original_title}  	<br />
				{/* "genre_ids": [
													18,
													28,
													878
												], */}
				<img src={`https://image.tmdb.org/t/p/w200/${this.props.movieDetail.backdrop_path}`} alt="" />

				{this.props.movieDetail.backdrop_path}		<br />
				{this.props.movieDetail.adult}				<br />
				{this.props.movieDetail.overview}			<br />
				{this.props.movieDetail.release_date}		<br />

				<br/>
				<br/>
				<br/>

				{
					this.props.movieCast !== null ?
					this.props.movieCast.map(cast => {
						return (
							<Panel>
								<div onClick={ () => this.props.setActorDetails(cast.cast_id) }>

								{ cast.cast_id }   <br/>
								</div>
								{ cast.character }   <br/>
								{ cast.credit_id }   <br/>
								{ cast.gender }   <br/>
								{ cast.id }   <br/>
								{ cast.name }   <br/>
								{ cast.order }   <br/>
								{ cast.profile_path }   <br/>
							</Panel>
						)
					})
					:
					null
				}

			</div>
		)
	}
}

export default MovieDetail;