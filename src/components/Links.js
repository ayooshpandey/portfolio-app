import { data } from "../info";
import { Stack, Badge, useColorModeValue } from '@chakra-ui/react';

export default function Links(){
    return(
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            variant="outline"
            colorScheme="green"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontSize="md"
            fontWeight={'600'}>
            #{data.interests[0]}
            </Badge>
          <Badge
            variant="outline"
            colorScheme="blue"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontSize="md"
            fontWeight={'600'}>
            #{data.interests[1]}
            </Badge>
          <Badge
            variant="outline"
            colorScheme="orange"
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontSize="md"
            fontWeight={'600'}>
            #{data.interests[2]}
          </Badge>
        </Stack>
    )
}