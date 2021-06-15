import React from 'react'
import { Heading, Avatar, Box, Text } from '@chakra-ui/react';
import { data } from '../info';
export default function UserInfo() {
    return (
        <Box>
            <Avatar
                size={'2xl'}
                src={
                    data.avatar
                }
                alt={data.name}
                mb={4}
                pos={'relative'}
                _after={{
                    content: '""',
                    w: 5,
                    h: 5,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                }}
            />
            <Heading as="h1" fontSize={'6xl'} >
               {data.name}
            </Heading>
            <Text fontSize={'2xl'} fontWeight={700} color={'gray.500'} mb={4} mt={3}>
                {data.title}
            </Text>
        </Box>
    );
}