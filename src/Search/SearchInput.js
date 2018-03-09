import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Absolute, Flex, Relative } from 'rebass';


import { Search as SearchIcon } from 'react-feather';
import { colors } from '../theme';
import Input from '../input';

const propTypes = {
  value: string,
  placehodler: '',
  onChange: func,
};

const defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};

const Fill = styled(Flex)`
  width: 100%;
  height: 100%;
`;

// Minor <Input /> change to make text fit nicely
const MainSearch = Input.extend`
  text-indent: 50px;
  transition:
    color 0.15s,
    background-color 0.15s,
    box-shadow 0.15s;
`;


function SearchInput({ value, placeholder, onChange, ...props }) {
  return ( 
    <Relative {...props}>
      <Absolute bottom={0} top={0}>
        <Fill align="center" px={3}>
          <SearchIcon color={colors.gray6} size={24} />
        </Fill>
      </Absolute>
      <MainSearch
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="search"
        py={3}
      />
  </Relative>
  );
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
