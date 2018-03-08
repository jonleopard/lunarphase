import React from 'react';
import { Flex } from 'rebass';
import Link from '../Link';

function Footer() {
  return (
    <Flex 
      is='footer'
      direction="column"
      align="center"
      py={7}
    >
      <Link
        href='https://twitter.com/jonlprd'
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by @jonlprd
      </Link>
    </Flex>
  );
}

export default Footer
