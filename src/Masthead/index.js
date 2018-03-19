import React from 'react';
import { Flex, Box } from 'rebass';
import { Moon } from 'react-feather';

import Text from '../Text';

function Masthead() {
  return (
    <masthead>
      <Flex py={7}>
        <Box py={10}>
          <Moon size={50} />
        </Box>
        <Box pl={10}>
          <Text mb={1} f={5} color="gray9">
            Moonphase.io
          </Text>
          <Text color="gray10" mb={20}>
            A tiny app that tells you the current moon phase.
          </Text>
        </Box>
      </Flex>
    </masthead>
  );
}

export default Masthead;
