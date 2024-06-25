/* */
import { useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Rin's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Product = () => {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{}</h4>
      <p>{}</p>
      <p>{}</p>
    </div>
  );
};

export default App;
