import CartWidget from "./CartWidget"
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../images/logo.png'
import './NavBarBootstrap.css'
function NavBarBootstrap(){
    return(
        <Navbar className="nav" bg="dark" variant ="dark"expand="lg">
            <Container>
                <img className ="logo" src={logo} alt="Cafenetic logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto linkNav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Hoodies</Nav.Link>
                        <Nav.Link href="#link">Coming In</Nav.Link>
                        <Nav.Link href="#link">Be Yours</Nav.Link>
                    </Nav>
                    <div>
                        <CartWidget number={3}/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    )
}

export default NavBarBootstrap