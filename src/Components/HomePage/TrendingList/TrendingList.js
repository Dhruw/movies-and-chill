import React from 'react';

import MovieCard from '../../Common/MovieCard/MovieCard';

class TrendingList extends React.Component {

	render() {
		return (
			<React.Fragment>
				{
					this.props.movieDetails.map(
						movie =>
							<MovieCard
								key={movie.id}
								movieDetails={movie}
							/>)
				}
			</React.Fragment>
		)
	}
}

export default TrendingList;