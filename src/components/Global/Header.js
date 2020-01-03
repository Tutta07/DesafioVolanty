import React,{Component} from 'react';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './imagenes/logo.jpg';



class Header extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
       <Navbar.Brand href="autos">Quanto vale meu Carro</Navbar.Brand>
       <Row>
        <Col xs={6} md={4}>
        <Image src={logo} rounded />
        </Col>
        </Row>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto linksnavgador">
           <Nav.Link href="inicio">Inicio</Nav.Link>
           <Nav.Link href="autos">Autos</Nav.Link>
           <Nav.Link href="acesso">Acesso</Nav.Link>
          
          </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> 
      </Navbar.Collapse>
      
    </Navbar>
    );
  }
}
export default Header;
