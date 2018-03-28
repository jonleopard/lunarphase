import React, { Component } from 'react';
import { Provider, Flex, Box, Button } from 'rebass';
import Masthead from './Masthead';
import Results from './MoonData/Results';
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

  getNorthernMoonPhase = async e => {
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

  getSouthernMoonPhase = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.wunderground.com/api/${API_KEY}/astronomy/q/SouthAfrica/CapeTown.json`
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
        <Flex alignItems="center">
          <Box w={[1 / 4, 1 / 4, 1 / 4]}>
            <MoonBackground />
          </Box>
          <Box w={1 / 2} pl={50}>
            <Masthead />
            <Button onClick={this.getNorthernMoonPhase} children="North" />
            <Button onClick={this.getSouthernMoonPhase} children="South" />
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
