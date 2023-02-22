import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Arthur V Fain</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;