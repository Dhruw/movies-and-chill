import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		return (
			<Navbar inverse collapseOnSelect fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">
							Movies and Chill
						</Link>
					</Navbar.Brand>
					<Navbar.Form pullLeft>
						<FormGroup>
							<FormControl 
								type="text" 
								placeholder="Search" 
								onChange={event => this.props.updateSearchText(event)} 
								onKeyPress={(event) => { if (event.key === 'Enter') this.props.searchFunction() }}
							/>
						</FormGroup>{' '}
						<Link to="/searchresults">
						<Button type="submit" onClick={this.props.searchFunction}>Search</Button>
						</Link>
					</Navbar.Form>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						{/* <NavItem eventKey={1} href="#">
							Link
      					</NavItem>
						<NavItem eventKey={2} href="#">
							Link
      					</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown> */}
					</Nav>
					<Nav pullRight>
						{/* <NavItem eventKey={1} href="#">
							Link Right
      					</NavItem>
						<NavItem eventKey={2} href="#">
							Link Right
      					</NavItem> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header;