import React from 'react';
import { Flex, Box } from 'rebass';
import SearchInput from './SearchInput';
import SearchButton from '../SearchButton';

class CitySearch extends React.Component {
  state = {
    city: '',
    country: '',
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  handleCountryChange = event => {
    this.setState({ country: event.target.value });
  };

  render() {
    return (
      <citysearch>
        <Flex flexDirection="row" flexWrap="wrap">
          <Box width={[1 / 2]} pr={2}>
            <SearchInput
              type="search"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleCityChange}
              mb={5}
            />
          </Box>
          <Box width={[1 / 2]}>
            <SearchInput
              type="search"
              placeholder="Country"
              value={this.state.country}
              onChange={this.handleCountryChange}
              mb={5}
            />
          </Box>
          <Box width={1}>
            <SearchButton />
          </Box>
        </Flex>
      </citysearch>
    );
  }
}

export default CitySearch;
