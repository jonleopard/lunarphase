import React from 'react';

import SearchInput from './SearchInput';

class CitySearch extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchInput
          type="search"
          placeholder="Enter a city..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          mb={5}
        />
      </div>
    );
  }
}

export default CitySearch;
