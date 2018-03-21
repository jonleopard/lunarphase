import React from 'react';
import { string } from 'prop-types';
import { Relative, Input } from 'rebass';

// Minor change to make text fit nicely
const MainSearchInput = Input.extend`
  text-indent: 10px;
  transition: color 0.15s, background-color 0.15s, box-shadow 0.15s;
`;

const propTypes = {
  type: string,
  name: string,
  placeholder: string,
};

const defaultProps = {
  type: string,
  name: string,
  placeholder: string,
};

function InputField({ type, name, placeholder }) {
  return (
    <Relative>
      <MainSearchInput
        type={type}
        name={name}
        placeholder={placeholder}
        py={3}
      />
    </Relative>
  );
}

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
