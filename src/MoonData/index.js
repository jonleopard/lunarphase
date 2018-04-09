import React from 'react';
import { Flex, Box, Text } from 'rebass';

const MoonData = props => (
  <Flex flexWrap="wrap" flexDirection="column">
    <Box w={1} pt={3}>
      {props.ageOfMoon && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Age of Moon: ${props.ageOfMoon}`}
        />
      )}
    </Box>
    <Box w={1} pt={3}>
      {props.phaseofMoon && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Current phase: ${props.phaseofMoon}`}
        />
      )}
    </Box>
    <Box w={1} pt={3}>
      {props.percentIlluminated && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Percent Illuminated: ${props.percentIlluminated} %`}
        />
      )}
    </Box>
    <Box w={1} pt={3}>
      {props.error && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Please enter the values ${props.error}`}
        />
      )}
    </Box>
  </Flex>
);

export default MoonData;
