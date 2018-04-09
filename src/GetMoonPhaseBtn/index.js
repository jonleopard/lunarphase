// GetMoonPhaseBtn
// This file takes in the default Button from Button.js.
// Define your props and custom attributes in this file.
// Anything done here will apply ONLY to this button.
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
//import { colors } from '../theme';

const WideBtn = styled(Button)`
  background-color: #0083dd;
  width: 100%;
`;

const propTypes = {
  children: string,
  onClick: func,
};

function GetMoonPhaseBtn({ children, onClick }) {
  return <WideBtn children={children} onClick={onClick} />;
}

GetMoonPhaseBtn.propTypes = propTypes;

export default GetMoonPhaseBtn;
