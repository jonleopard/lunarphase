import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import Masthead from './Masthead';
import CitySearch from './Search/CitySearch';
import Footer from './Footer';
import MoonBackground from './MoonBackground';

class App extends Component {
  render() {
    return (
      <Flex alignItems="center">
        <Box
          width={[1 / 4, 1 / 4, 1 / 4]}
          display={['block', 'none']}
          minWidth={600}
        >
          <MoonBackground />
        </Box>

        <Box width={1 / 2} pl={50}>
          <Masthead />
          <CitySearch />
          <Footer />
        </Box>
      </Flex>
    );
  }
}

export default App;
