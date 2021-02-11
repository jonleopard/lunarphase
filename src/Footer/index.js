import React from 'react';
import { Flex } from 'rebass';
import Link from '../Link';

const Footer = (props) => (
  <footer>
    <Flex mt={3}>
      <Link
        href="https://github.com/jonleopard/moonphase.space"
        children="GitHub"
      />
      <Link
        ml="auto"
        href="https://jonleopard.com"
        children="Made by Jon Leopard"
      />
    </Flex>
  </footer>
);

export default Footer;
