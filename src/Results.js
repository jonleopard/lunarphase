import React from 'react';
import { Flex, Box, Text } from 'rebass';

const Results = props => (
  <Flex>
    <Box w={1}>
      {props.ageOfMoon && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Age of Moon: ${props.ageOfMoon}`}
        />
      )}
      {props.phaseofMoon && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Current phase: ${props.phaseofMoon}`}
        />
      )}
      {props.percentIlluminated && (
        <Text
          textAlign="left"
          fontWeight="medium"
          children={`Percent Illuminated: ${props.percentIlluminated} %`}
        />
      )}
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

export default Results;
