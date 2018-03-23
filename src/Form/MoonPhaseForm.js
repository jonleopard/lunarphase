import React from 'react';
import { Flex, Box } from 'rebass';
import InputField from './InputField';
import SearchButton from './SearchButton';

const MoonPhaseForm = props => (
  <form onSubmit={props.getMoonPhase}>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
      <Box w={1 / 2} pr={2}>
        <InputField type="text" name="city" placeholder="City..." mb={5} />
      </Box>
      <Box w={1 / 2}>
        <InputField
          type="text"
          name="country"
          placeholder="State or Country"
          mb={5}
        />
      </Box>
      <Box w={1}>
        <SearchButton />
      </Box>
    </Flex>
  </form>
);

export default MoonPhaseForm;
