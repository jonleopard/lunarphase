import React, { Component } from 'react';
import { Flex, Box, Image } from 'rebass';
import Container from './Container.js';
import Masthead from './Masthead';
import CitySearch from './Search/CitySearch';
import Footer from './Footer';
import moonImg from './moon.png';

class App extends Component {
  render() {
    return (
      <Container>
        <Flex alignItems='center'>
        <Box width={1/4}>
          <Image
            src={moonImg}
          />
        </Box>
        <Box width={1/2} pl={50}>
          <Masthead />
          <CitySearch />
          <Footer />
        </Box>
      </Flex>
      </Container>
    );
  }
}

export default App;
