import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget  from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pumas Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shorts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ropa de Invierno</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nike Store
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;