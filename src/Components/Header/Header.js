
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import './Header.css'

const Header = () => {
    const { handleLogout, user } = useFirebase()
    return (
        <div className="">
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand className="me-5" to="home"><h2>Tour <span className="text-danger">X</span></h2></Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link><Link className="link" to="home"> Home</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="dashboard">Dashboard</Link></Nav.Link>
                        {user.email ? <button className="btn btn-dark" onClick={handleLogout}>Logout</button> : <Nav.Link><Link className="link" to="login"> Login</Link></Nav.Link>}

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;