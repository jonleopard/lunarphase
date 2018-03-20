import React from 'react';
import { Relative } from 'rebass';
import { Input } from 'rebass';
// Minor <Input /> change to make text fit nicely
const MainSearch = Input.extend`
  text-indent: 10px;
  transition: color 0.15s, background-color 0.15s, box-shadow 0.15s;
`;

function SearchInput({ value, placeholder, onChange }) {
  return (
    <searchinput>
      <Relative>
        <MainSearch
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type="search"
          py={3}
        />
      </Relative>
    </searchinput>
  );
}

export default SearchInput;
