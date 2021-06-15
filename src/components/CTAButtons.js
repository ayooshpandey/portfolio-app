import React from 'react'
import { Link, Container, Stack, Button } from '@chakra-ui/react';
import { data } from '../info';

export default function CTA() {
    return (
        <Stack mt={8} direction={'row'} spacing={5}>
            <Container maxW={'fit-content'}>
                <Link href={data.email} isExternal>
                    <Button

                        size="md"
                        height="48px"
                        m={2}
                        flex={0.5}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg="#dc2f02"
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'green.600',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}>
                        EMAIL ME ✉️
                    </Button>
                </Link>
                {'      '}
                <Link href={data.resume} isExternal>
                    <Button
                        size="md"
                        height="48px"
                        flex={0.5}
                        m={2}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg="#52b69a"
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

                        MY RESUME 📄

                    </Button>
                </Link>
          
          </Container>
        </Stack >
    )
}