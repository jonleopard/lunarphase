import React from 'react';
import { Flex, Box } from 'rebass';
import { Moon } from 'react-feather';

import Text from '../Text';

function Masthead() {
  return (
    <Flex flexDirection="row">
      <Box pr={2} pt={2}>
        <Moon size={50} />
      </Box>
      <Box w={1}>
        <Text f={5} color="gray9">
          Moonphase.io
        </Text>
        <Text color="gray10" mb={4}>
          A tiny app that tells you the current moon phase.
        </Text>
      </Box>
    </Flex>
  );
}

export default Masthead;
