import React from 'react';
import { Flex } from 'rebass';

import Text from '../Text';

function Masthead() {
  return (
    <Flex flexDirection="column" align="left" py={7}>
      <Text mb={1} f={5} center color="gray9">
        Moonphase.io
      </Text>
      <Text color="gray10" mb={20}>
        A tiny app that tells you the current moon phase.
      </Text>
    </Flex>
  );
}

export default Masthead;
