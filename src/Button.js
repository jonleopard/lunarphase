// Button.js
// This file is for building on top of Button from Rebass.
// Any styles applied here will apply everywhere.
import styled from 'styled-components';
import { Button } from 'rebass';

import { shadows } from './theme';

export default styled(Button)`
  box-shadow: ${shadows.small};
  &:focus {
    box-shadow: ${shadows.outline};
  }
`;
