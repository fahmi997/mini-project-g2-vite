import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const ButtonScroll = ({ scrollLeft, scrollRight, hideLeft, hideRight }) => {
  return (
    <div>
      <IconButton
        aria-label="left-arrow"
        color="#202020"
        borderRadius="full"
        position="absolute"
        left="10px"
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={scrollLeft}
        opacit={hideLeft ? 0 : 1}
        pointerEvents={hideLeft ? 'none' : 'auto'}
      >
        <BiLeftArrowAlt />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        color="#202020"
        borderRadius="full"
        position="absolute"
        right="10px"
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={scrollRight}
        opacity={hideRight ? 0 : 1}
        pointerEvents={hideRight ? 'none' : 'auto'}
      >
        <BiRightArrowAlt />
      </IconButton>
    </div>
  );
};

export default ButtonScroll;
