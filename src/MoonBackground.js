import React from 'react';
import { Image, Box } from 'rebass';
import moonImg from './moon.png';

function MoonBackground() {
  return (
    <Box w={[0, 1 / 3, 1 / 3]}>
      <Image src={moonImg} />
    </Box>
  );
}

export default MoonBackground;
