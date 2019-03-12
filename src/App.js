import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import { createGlobalStyle } from 'styled-components';
import Masthead from './Masthead';
import MoonData from './MoonData';
import GetMoonPhaseBtn from './GetMoonPhaseBtn';
import Footer from './Footer';
import MoonBackground from './MoonBackground';

const GlobalStyle = createGlobalStyle` 
  *,
  *:before,
  *:after {
    transition: inherit;
  }

  body {
    background-color: black;
    color: white;
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    }


  ::selection {
    background-color: #00f;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

`;

class App extends Component {
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
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/52bda7962f45be67263fdcd8fe271560/37.8267,-122.4233`
    );
    const res = await api_call.json();
    if (res) {
      this.setState({
        phaseofMoon: res.daily.data[0].moonPhase,
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
      <>
        <GlobalStyle />
        <Flex alignItems="center" justifyContent="space-between">
          <Box width={[0, 1 / 4, 1 / 4]}>
            <MoonBackground />
          </Box>
          <Box width={[1, 1 / 2, 1 / 3]} pt={[4, 0, 0]} mr={5}>
            <Masthead />
            <GetMoonPhaseBtn
              children="Get Current Moon Phase"
              onClick={this.getMoonPhase}
            />
            <MoonData
              phaseofMoon={this.state.phaseofMoon}
              error={this.state.error}
            />
            <Footer />
          </Box>
        </Flex>
      </>
    );
  }
}

export default App;
