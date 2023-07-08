/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <><img  src="https://play-lh.googleusercontent.com/1ilSkBLu0vJwY8b6McwNaEer3tjaBPxFJoOFLlkqvW0HlxSue2mbJxTcUwbtZIsWE1M=w240-h480-rw"
        alt="Logo" width={'50px'}
      />
      <span style={{fontSize:'20px',marginLeft:'10px'}}>BOOKING DEI</span>
    </>
  );
};

export default Logo;
