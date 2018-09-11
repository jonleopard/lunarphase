import React from 'react';
import { Provider, Flex, Box, Container } from 'rebass';
import Masthead from './Masthead';
import MoonData from './MoonData';
import GetMoonPhaseBtn from './GetMoonPhaseBtn';
import Footer from './Footer';
import MoonBackground from './MoonBackground';

const API_KEY = '2d50e8d7d184fe13';

class App extends React.Component {
  state = {
    country: undefined,
    city: undefined,
    ageOfMoon: undefined,
    phaseofMoon: undefined,
    percentIlluminated: undefined,
    error: null,
    isLoaded: false,
  };

  getMoonPhase = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.wunderground.com/api/${API_KEY}/astronomy/q/France/Paris.json`
    );
    const data = await api_call.json();
    if (data) {
      this.setState({
        ageOfMoon: data.moon_phase.ageOfMoon,
        phaseofMoon: data.moon_phase.phaseofMoon,
        percentIlluminated: data.moon_phase.percentIlluminated,
        error: '',
      });
    } else {
      this.setState({
        isLoaded: true,
        error: 'Please enter the value',
      });
    }
  };
  render() {
    return (
      <Provider>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={[0, 1 / 4, 1 / 4]}>
            <MoonBackground />
          </Box>
          <Container w={[1, 1 / 3, 1 / 3]} pt={[4, 0, 0]} px={[3, 0, 0]}>
            <Masthead />
            <GetMoonPhaseBtn
              children="Get Current Moon Phase"
              onClick={this.getMoonPhase}
            />
            <MoonData
              ageOfMoon={this.state.ageOfMoon}
              phaseofMoon={this.state.phaseofMoon}
              percentIlluminated={this.state.percentIlluminated}
              error={this.state.error}
            />
            <Footer />
          </Container>
        </Flex>
      </Provider>
    );
  }
}

export default App;
