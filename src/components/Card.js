import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    IconButton,
    MdPhone,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import {SiLinkedin,SiTwitter,SiInstagram, SiHackerrank} from 'react-icons/si';
  
  export default function ProfileCard() {
    return (
      <Center p={5}>
        <Box
          // maxH = {window.innerHeight}
          maxW={window.innerWidth}
          w={'fit-content'}
          h={'fit-content'}
          
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
          <Heading fontSize={'4xl'} fontFamily={'body'}>
            Abhijeet Prasad
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Software Engineering Student
          </Text>
          
          <Text
            fontSize={'lg'}
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
          <br/>
          <Text
            fontSize={'sm '}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {' '}
            Find me on the internet 👇
            {' '}
          </Text> 
          <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          
            <a href="http://github.com/kudoabhijeet/"><GoMarkGithub/></a>
            <a href="https://linkedin.com/in/kudoabhijeet/"><SiLinkedin/></a>
            <a href="https://instagram.com/kudoabhijeet/"><SiInstagram/></a>
            <a href="https://twitter.com/kudoabhijeet/"><SiTwitter/></a>
            <a href="https://www.hackerrank.com/AbhijeetPrasad"><SiHackerrank/></a>

          </Stack>
          <Stack mt={8} direction={'row'} spacing={4}>
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Email ✉️
            </Button>

            <Button
              flex={1}
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
              My Resume 📄
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }