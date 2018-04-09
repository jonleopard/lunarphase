import React from 'react';
import { Box } from 'rebass';
import { Moon } from 'react-feather';

import Text from '../Text';

function Masthead() {
  return (
    <Box>
      <Moon size={50} />
      <Text f={5} color="gray9">
        Moonphase.space
      </Text>
      <Text color="gray10" mb={4}>
        A tiny app that tells you the current moon phase.
      </Text>
    </Box>
  );
}

export default Masthead;
