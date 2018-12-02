import React from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselBanner extends React.Component {

	render() {
		return (
			<Carousel>
				{
					this.props.trendingMovies ?

						this.props.trendingMovies.map(movie => (
							<Carousel.Item key={movie.id}>
								<img alt={movie.original_title} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
								<Carousel.Caption>
									<h3>{movie.title}</h3>
									{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
						))

						:
						null
				}
			</Carousel>

		)
	}
}

export default CarouselBanner;