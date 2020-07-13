import React from 'react';
import "../src/assets/FontAwesomeIcons";
import './App.css';
import { Container} from 'react-bootstrap';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
function App() {
  return (
    <Container>
      <Header />
      <ProductsContainer />
      <MessageContainer />
      <CartContainer />

    </Container>
  );
}

export default App;
