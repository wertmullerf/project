import CartWidget from "./CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
function NavBarBootstrap(){
    return(
        <Navbar bg="dark" variant ="dark"expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Hoodies</Nav.Link>
                        <Nav.Link href="#link">Coming In</Nav.Link>
                        <Nav.Link href="#link">Be Yours</Nav.Link>
                    </Nav>
                    <div>
                        <CartWidget number="3"/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
export default NavBarBootstrap