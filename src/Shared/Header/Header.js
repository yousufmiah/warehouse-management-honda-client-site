import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../Assets/images/logo/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        // variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img height={40} src={logo} alt="" />
            <strong
              style={{ fontSize: "25px" }}
              className="ps-2 text-success font-bold "
            >
              Honda App
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <CustomLink to="/home" className=" mx-3 navbar-text ">
                Home
              </CustomLink>

              <CustomLink to="/items" className=" mx-3 navbar-text">
                Items
              </CustomLink>
            </Nav>
            <Nav>
              <CustomLink to="/manage" className=" mx-3 navbar-text">
                Manage
              </CustomLink>
              <CustomLink to="/addNew" className=" mx-3 navbar-text">
                Add New
              </CustomLink>

              {user ? (
                <CustomLink to="/login">
                  <Button
                    onClick={handleSignOut}
                    className="btn btn-danger px-4 me-4"
                  >
                    SignOut
                  </Button>
                </CustomLink>
              ) : (
                <CustomLink to="/login">
                  <Button className="btn btn-primary px-4">LogIn</Button>
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
