import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Absolute, Flex, Relative, Box } from 'rebass';


import SearchIcon from 'react-icons/lib/fa/search';
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

function SearchInput({ value, placeholder, onChange, ...props }) {
  return (
    <Box width={1/2}>
    <Relative {...props}>
      <Absolute top bottom left>
        <Fill align="center" px={4}>
          <SearchIcon color={colors.gray6} />
        </Fill>
      </Absolute>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="search"
        py={4}
        pr={4}
        pl="56px"
      />
    </Relative>
  </Box>
  );
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
