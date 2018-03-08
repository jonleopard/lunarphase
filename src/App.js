import React, { Component } from 'react';
import Container from './Container.js';
import Moon from './Moon';
import CitySearch from './Search/CitySearch';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Moon />
        <CitySearch />
        <Footer />
      </Container>
    );
  }
}

export default App;
