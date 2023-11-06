import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar as BSNavBar,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <BSNavBar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <BSNavBar.Brand>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo de DecoHome"
          />
        </BSNavBar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home Deco
          </NavLink>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavLink to={`/category/${1}`} className="nav-link" key={1}>
              Sets
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to={`/category/${2}`} className="nav-link" key={2}>
              Platos
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to={`/category/${3}`} className="nav-link" key={3}>
              Cuencos
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to={`/category/${4}`} className="nav-link" key={4}>
              Macetas
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to={`/category/${5}`} className="nav-link" key={5}>
              Tazas
            </NavLink>
            <NavDropdown.Divider />
            <NavLink to={`/category/${6}`} className="nav-link" key={6}>
              Otros
            </NavLink>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar..."
            className="me-2 "
            aria-label="Search"
          />
          <Button variant="light">Buscar</Button>
        </Form>
        <CartWidget />
      </Container>
    </BSNavBar>
  );
};
export default NavBar;
