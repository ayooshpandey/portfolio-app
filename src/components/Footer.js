import React from 'react'
import {  Text, useColorModeValue } from '@chakra-ui/react';
export default function Footer(){
    return(
        <Text
          fontSize={'sm'}
          mt={'6'}
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {' '}
          &#169; This website has no copyright issues. Feel free to copy whatever you like.
            {' '}
        </Text>
    );
}

