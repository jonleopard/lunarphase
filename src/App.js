import React from 'react';
import { Provider, Flex, Box } from 'rebass';
import Masthead from './Masthead';
import MoonData from './MoonData/';
import GetMoonPhaseBtn from './GetMoonPhaseBtn/';
import Container from './Container';
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
    console.log(data);
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
        <Flex flexDirection="row" alignItems="center">
          <MoonBackground />
          <Container>
            <Box w={[1, 1 / 2, 1 / 2]} pl={[0, 3, 3]} py={[4, 4, 4]}>
              <Masthead />
              <GetMoonPhaseBtn
                children="Get Current Moon Phase"
                onClick={this.getMoonPhase}
                width={1}
              />
              <MoonData
                ageOfMoon={this.state.ageOfMoon}
                phaseofMoon={this.state.phaseofMoon}
                percentIlluminated={this.state.percentIlluminated}
                error={this.state.error}
              />
              <Footer />
            </Box>
          </Container>
        </Flex>
      </Provider>
    );
  }
}

export default App;
