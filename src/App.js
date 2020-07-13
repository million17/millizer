import React from 'react';
import "../src/assets/FontAwesomeIcons";
import './App.css';
import { Container} from 'react-bootstrap';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Carts from './components/Carts';
function App() {
  return (
    <Container>
      <Header />
      <ProductsContainer />
      <Message />
      <Carts />

    </Container>
  );
}

export default App;
