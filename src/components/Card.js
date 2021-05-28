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
        

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Chat with me 💬
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
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Hire me 💻
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }