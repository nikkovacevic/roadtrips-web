import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Heading, useColorMode } from '@chakra-ui/react';
import theme from '../../theme';

const NavbarLinkItem = ({ path, label }) => {
	const { colorMode } = useColorMode();
	const hoverColor = colorMode === 'light' ? 'hoverLight' : 'hoverDark';

	return (
		<ReactRouterLink to={ path }>
			<Box
				p='4'
				borderRadius='4'

				_hover={
					{ bg: theme.colors[hoverColor] }
				}>
				<Heading as='h4' size='sm'>
					{ label.toUpperCase() }
				</Heading>
			</Box>
		</ReactRouterLink>
	);
};

export default NavbarLinkItem;