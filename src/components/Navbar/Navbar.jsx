import React, { useState } from 'react';
import ToggleColorModeButton from './ToggleColorModeButton.jsx';
import {
	Box, Flex, Heading, Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	IconButton, useColorModeValue, useTheme, useMediaQuery
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaBars, FaSpotify } from 'react-icons/fa';
import NavbarLinkItem from './NavbarLinkItem.jsx';

const Navbar = () => {

	const [expanded, setExpanded] = useState(false);
	const [isMobile] = useMediaQuery('(max-width: 768px)');

	const toggleSidebar = () => {
		setExpanded((prev) => !prev);
	};

	return (
		<Flex
			minWidth='max-content'
			alignItems='center' gap='2'
			justifyContent='space-between'
			px='8'
			py='4'
		>
			{/* Desktop navigation*/ }
			<Flex
				direction='row'
				alignItems='center'
				width='fit-content'
			>
				<ReactRouterLink to='/'>
					<Heading display='flex' alignItems='center'>
						<FaSpotify style={ { marginRight: '0.5rem' } }/>
						Roadtrips
					</Heading>
				</ReactRouterLink>
			</Flex>

			{/* NavigationLinks*/ }
			<Flex
				minWidth='20%'
				alignItems='center'
				justifyContent='space-between'
				display={ { base: 'none', md: 'flex' } }
			>
				<NavbarLinkItem path='/create' label='Create'/>
				<NavbarLinkItem path='/join' label='Join'/>
			</Flex>


			{/* Mobile navigation*/ }
			<Flex
				alignItems='center'
				justifyContent='space-between'
				gap='4'
			>
				{ !isMobile && <ToggleColorModeButton/> }
				<IconButton
					aria-label='Open navigation'
					icon={ <FaBars/> }
					onClick={ toggleSidebar }
					display={ { base: 'flex', md: 'none' } }
				/>
			</Flex>

			<Drawer placement='right' onClose={ toggleSidebar } isOpen={ expanded }>
				<DrawerOverlay/>
				<DrawerContent>
					<DrawerCloseButton/>
					<DrawerHeader>
						<Heading display='flex' alignItems='center'>
							<FaSpotify style={ { marginRight: '0.5rem' } }/>
							Roadtrips
						</Heading>
					</DrawerHeader>
					<DrawerBody>
						{/* List of navigation links */ }
						<Flex
							flexDirection='column'
							alignItems='flex-start'
							justifyContent='space-between'
							height='100%'
							p='4'
						>

							<Box>
								<NavbarLinkItem path='/create' label='Create'/>
								<NavbarLinkItem path='/join' label='Join'/>
							</Box>
							<Box>
								<ToggleColorModeButton/>
							</Box>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>


		</Flex>
	);
};

export default Navbar;