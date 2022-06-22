import React from "react";
import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
function Header() {
  const userLogin=useSelector((state) => state.userLogin)
  const {userInfo}=userLogin

  const dispatch= useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <Link  style={{ textDecoration: 'none' }} to="/">
            <Navbar.Brand href="/">Greenland</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link  style={{ textDecoration: 'none' }} to="/cart">
                <Nav.Link href="/cart">
                  <i class="fa-solid fa-cart-arrow-down"></i>Cart
                </Nav.Link>
              </Link>
             
              {userInfo ? (
                <NavDropdown title={userInfo?.name} id='username'>
                  {console.log("userinfo",userInfo)}
              

                  <Nav.Link  href='/profile'>
                    <NavDropdown.Item><Link  style={{ textDecoration: 'none' }} to="/profile">Profile </Link></NavDropdown.Item>
                  </Nav.Link >
                 
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                </NavDropdown>
              )
            :(
              <Link  style={{ textDecoration: 'none' }} to="/login">
              <Nav.Link  href='/login'>
              <i class="fa-solid fa-user"></i>Login
            </Nav.Link >
            </Link>
            )}
            

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
