import React from 'react';
import { Flex, Box, Button, Relative, Absolute } from 'rebass';
import { Search as SearchIcon } from 'react-feather';
import styled from 'styled-components';
import colors from '../theme';

const Fill = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const MainSearch = Button.extend`
  width: 100%;
`;

function SearchButton() {
  return (
    <Flex flexWrap="row">
      <Box width={1} pt={10}>
        <Relative>
          <Absolute bottom={0} top={0}>
            <Fill align="center" px={3}>
              <SearchIcon color={colors.gray6} size={24} />
            </Fill>
          </Absolute>
          <MainSearch children="Get Current Moon Phase" py={15} />
        </Relative>
      </Box>
    </Flex>
  );
}

export default SearchButton;
