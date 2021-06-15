import { data } from "../info";
import { Stack, IconButton } from '@chakra-ui/react';
import { SiLinkedin, SiTwitter, SiInstagram, SiGithub } from 'react-icons/si';
export default function SocialLinks(){
    return(
        <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <a href={data.social_links.github}><IconButton
            bgColor="#219ebc"
            color="white"
            aria-label={data.social_links.github}
            size="lg"
            icon={<SiGithub />} 
          /></a>
          <a href={data.social_links.linkedin}><IconButton
            bgColor="#219ebc"
            color="white"
            aria-label={data.social_links.linkedin}
            size="lg"
            icon={<SiLinkedin />}
          /></a>
          <a href={data.social_links.instagram}><IconButton
            bgColor="#219ebc"
            color="white"
            aria-label={data.social_links.instagram}
            size="lg"
            icon={<SiInstagram />}
          /></a>
          <a href={data.social_links.twitter}><IconButton
            bgColor="#219ebc"
            color="white"
            aria-label={data.social_links.twitter}
            size="lg"
            icon={<SiTwitter />}
          /></a>
          {/* <a href={data.social_links.github}><IconButton
            colorScheme="cyan"
            aria-label="Call Segun"
            size="lg"
            icon={<SiHackerrank />}
          /></a> */}

        </Stack>
    )
}