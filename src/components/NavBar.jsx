import React from 'react' 
import {Button, Nav,Navbar,Dropdown,NavDropdown,Container} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Toko Sepatu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item></Nav.Item>
                    </Nav>
                    <Nav>
                        {this.props.email?
                        <>
                        <Dropdown>
                            <DropdownToggle>
                            {this.props.email ? this.props.email : "Email"}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>History</DropdownItem>
                                <DropdownItem>Cart</DropdownItem>
                                <DropdownItem><i class="fas fa-sign-out-alt"></i> Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </>
                        :
                        <>
                        <Button as={Link} to="/login"><i class="fas fa-sign-in-alt"></i> Login</Button>
                        </>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.UserReducer.email,
        cart: state.UserReducer.cart,
    }
}

export default NavigationBar