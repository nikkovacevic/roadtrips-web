import React from 'react';
import { Text, Box, Button, Grid, Heading, Image, useMediaQuery, Flex, useColorMode } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=25869bb9985b4c48ae9a121b08b88298&response_type=code&redirect_uri=http://localhost:5173/create&scope=user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing';

const SpotifyAuthPage = () => {

	const [isMobile] = useMediaQuery('(max-width: 768px)');
	const { colorMode } = useColorMode();

	return (
		<Grid
			templateColumns={ isMobile ? '1fr' : '1fr 1fr' }
			gap='4'
			textAlign={ isMobile ? 'center' : 'left' }
			p='8'
			minHeight='80vh'
		>
			<Flex
				flexDirection='column'
				alignItems={ isMobile ? 'center' : 'flex-start' }
				justifyContent='center'
				px={ isMobile ? '4' : '12' }
			>
				<Heading as='h1' mb='4' size='3xl'>
					Get started
				</Heading>
				<Text fontSize='lg' mb='8'>
					Create a session and let your friends add songs to the playlist!
				</Text>
				<Button
					leftIcon={ <FaSpotify fontSize='1.5rem' mx='1.5rem'/> }
					colorScheme='spotify'
					color={ colorMode === 'dark' ? 'white' : 'black' }
					p='4'
					mb='18'
					size='xl'
					onClick={ () => window.location.href = AUTH_URL }
				>
					Login with Spotify
				</Button>
			</Flex>
			<Flex
				flexDirection='column'
				alignItems={ isMobile ? 'center' : 'flex-start' }
				justifyContent='center'
			>
				<Image
					src='https://st2.depositphotos.com/4072575/10428/i/450/depositphotos_104284352-stock-photo-white-paper-texture-hi-res.jpg'
					alt='Roadtrip'
					borderRadius='lg'
				/>
			</Flex>
		</Grid>
	);
};

export default SpotifyAuthPage;