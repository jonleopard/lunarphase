import styled from 'styled-components';
import { Link } from 'rebass';

import { colors } from './theme';

export default styled(Link)`
  color: ${colors.gray9};
  &:hover {
    color: ${colors.gray1};
    transition: 0.15s;
  }
`;
