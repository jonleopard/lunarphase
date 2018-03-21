import React, { Component } from 'react';
import { Provider, Flex, Box } from 'rebass';
import Masthead from './Masthead';
import MoonPhaseForm from './Form/MoonPhaseForm';
import Results from './Results';
import Footer from './Footer';
import MoonBackground from './MoonBackground';

const API_KEY = '2d50e8d7d184fe13';

class App extends Component {
  state = {
    country: undefined,
    city: undefined,
    ageOfMoon: undefined,
    phaseofMoon: undefined,
    percentIlluminated: undefined,
    error: undefined,
  };

  getMoonPhase = async e => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `https://api.wunderground.com/api/${API_KEY}/astronomy/q/${country}/${city}.json`
    );
    const data = await api_call.json();
    console.log(data);
    if (country && city) {
      this.setState({
        ageOfMoon: data.moon_phase.ageOfMoon,
        phaseofMoon: data.moon_phase.phaseofMoon,
        percentIlluminated: data.moon_phase.percentIlluminated,
        error: '',
      });
    } else {
      this.setState({
        ageOfMoon: undefined,
        phaseofMoon: undefined,
        percentIlluminated: undefined,
        error: 'Please enter the value',
      });
    }
  };

  render() {
    return (
      <Provider>
        <Flex alignItems="center">
          <Box w={[1 / 4, 1 / 4, 1 / 4]}>
            <MoonBackground />
          </Box>

          <Box w={1 / 2} pl={50}>
            <Masthead />
            <MoonPhaseForm getMoonPhase={this.getMoonPhase} />
            <Results
              ageOfMoon={this.state.ageOfMoon}
              phaseofMoon={this.state.phaseofMoon}
              percentIlluminated={this.state.percentIlluminated}
              error={this.state.error}
            />
            <Footer />
          </Box>
        </Flex>
      </Provider>
    );
  }
}

export default App;
