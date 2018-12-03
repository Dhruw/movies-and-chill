import React from 'react';
import { Navbar, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		return (
			<Navbar inverse collapseOnSelect fixedTop>
				<Navbar.Header>
					<Navbar.Brand className="hidden-xs">
						<Link to="/">
							Movies and Chill
						</Link>
					</Navbar.Brand>
					<Navbar.Form pullLeft>

						<FormGroup>
							<InputGroup>
								<FormControl
									type="text"
									placeholder="Search Movies . . ."
									onChange={event => this.props.updateSearchText(event)}
									onKeyPress={(event) => { if (event.key === 'Enter') this.props.searchFunction() }}
								/>
								<InputGroup.Button>
									<Link to="/searchresults">
										<Button
											type="submit"
											onClick={this.props.searchFunction}
										>
											<i className="fa fa-search"></i>
										</Button>
									</Link>
								</InputGroup.Button>
							</InputGroup>
						</FormGroup>

					</Navbar.Form>
				</Navbar.Header>
			</Navbar>
		)
	}
}

export default Header;