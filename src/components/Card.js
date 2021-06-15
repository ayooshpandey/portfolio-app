import React from 'react'
import { Link, Box, Center, Text, useColorModeValue } from '@chakra-ui/react';
import Footer from './Footer';
import UserInfo from './UserInfo';
import Links from './Links';
import SocialLinks from './SocialLinks';
import CTA from './CTAButtons';

export default function ProfileCard() {
  return (
    <Center m={2}>
      <Box
        // maxH = {window.innerHeight}
        maxW={window.innerWidth}
        w="100%"
        h={'fit-content'}
        bgGradient="linear(#F5DEA7, #F5BD4D)"
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        
        rounded={'md'}
        p={4}
        textAlign={'center'}>
        <UserInfo/>
        <Text
          fontSize={'xl'}
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {' '}
          Talk to me about ⤵
        </Text>
        <Links/>
        <br />
        <Text
          fontSize={'xl'}
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {' '}
            Find me anywhere on the internet
            {' '}
        </Text>
        <SocialLinks/>
        <Text
          fontSize={'md'}
          textAlign={'center'}
          fontWeight={500} color={'gray.700'} mt={6}
          px={3}>
          {' '}
          <Link href="https://blog.kudoabhijeet.com">
            Read my Blogs 🚀
            </Link>
            {' '}
        </Text>
        <Text
          fontSize={'md'}
          textAlign={'center'}
          fontWeight={500} color={'gray.700'} mb={6} mt={3}
          px={3}>
          {' '}
          <Link href="https://www.buymeacoffee.com/kudoabhijeet">
            Buy me a coffee ☕
            </Link>
            {' '}
        </Text>
        <CTA/>

      <Footer/>
        
      </Box>
    </Center>
  );
}