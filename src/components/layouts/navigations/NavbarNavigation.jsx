import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Cross as Hamburger } from "hamburger-react";
import { FiBell, FiMail } from "react-icons/fi";
import UserAvatar from "react-user-avatar";

export const NavbarNavigation = () => {
  const navigate = useNavigate();
  const [hamburgerActive, setHamburgerActive] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    navigate("/auth/login");
  };

  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Toggle>
          <Hamburger toggled={hamburgerActive} toggle={setHamburgerActive} />
        </Navbar.Toggle>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-link-icon" onClick={handleLogout}>
              <small>Log Out</small>
            </Nav.Link>

            {/* <Nav.Link className="nav-link-icon">
              <FiMail />
            </Nav.Link>

            <Nav.Link className="nav-link-icon">
              <FiBell />
            </Nav.Link>

            <Nav.Link>
              <UserAvatar size="30" name="Patrick Policarpio" />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
