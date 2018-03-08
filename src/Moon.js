import React from 'react';
import { Box, BackgroundImage } from 'rebass';
import moonImg from './moon.png';


const Moon = () => {
  return(
    <Box width={1/4}>
      <BackgroundImage
        ratio={1/4}
        src={moonImg}
      />
    </Box>
  )
}


export default Moon;
