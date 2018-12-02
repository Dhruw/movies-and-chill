import React from 'react';
import { Carousel, Label, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
									<h3 className="movie-title">{movie.title}</h3>
									<h4>
										<Label bsStyle="default">
											Rating {movie.vote_average}
										</Label>
									</h4>
									<p>
										{movie.overview}
									</p>
									<Link to={`/movie/${movie.id}`}>
										<Button bsStyle="danger">
											Know More
										</Button>
									</Link>
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