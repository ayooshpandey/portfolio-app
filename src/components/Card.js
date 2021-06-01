import React from 'react'
import { Link, Heading, Avatar, Box, Center, Text, Stack, Button, Badge, useColorModeValue, IconButton } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin, SiTwitter, SiInstagram, SiHackerrank } from 'react-icons/si';

export default function ProfileCard() {
  return (
    <Center p={5}>
      <Box
        // maxH = {window.innerHeight}
        maxW={window.innerWidth}
        w="100%"
        h={'fit-content'}
        // bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'2xl'}
          src={
            'https://kudoabhijeet.com/profile.PNG'
          }
          alt={'Abhijeet Prasad'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading as="h1" fontSize={'6xl'} fontFamily={'body'} >
          Abhijeet Prasad
        </Heading>
        <Text fontSize={'2xl'} fontWeight={600} color={'gray.500'} mb={4} mt={4}>
          Software Engineering Student
        </Text>
        <Text
          fontSize={'xl'}
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {' '}
          Talk to me about 👇
        </Text>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            variant="outline"
            colorScheme="green"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Technology
            </Badge>
          <Badge
            variant="outline"
            colorScheme="blue"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Open-Source
            </Badge>
          <Badge
            variant="outline"
            colorScheme="orange"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Investing
          </Badge>
        </Stack>
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
        <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>

          <a href="http://github.com/kudoabhijeet/"><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<GoMarkGithub />}
          /></a>
          <a href="https://linkedin.com/in/kudoabhijeet/"><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<SiLinkedin />}
          /></a>
          <a href="https://instagram.com/kudoabhijeet/"><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<SiInstagram />}
          /></a>
          <a href="https://twitter.com/kudoabhijeet/"><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<SiTwitter />}
          /></a>
          <a href="https://www.hackerrank.com/AbhijeetPrasad"><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<SiHackerrank />}
          /></a>

        </Stack>
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
        <Stack mt={8} direction={'row'} spacing={5}>
          <Button
            size="md"
            height="48px"
            width="20px"
            flex={0.5}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            <Link href="mailto:abhi.prasad16@gmail.com" isExternal>
              EMAIL ME ✉️
            </Link>
          </Button>


          <Button
            size="md"
            height="48px"
            flex={0.5}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.600',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            <Link href="https://kudoabhijeet.com/resume.pdf" isExternal>
              MY RESUME 📄
            </Link>
          </Button>

        </Stack>


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
      </Box>
    </Center>
  );
}