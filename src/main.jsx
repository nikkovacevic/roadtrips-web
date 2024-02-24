import React from 'react';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';
import theme from './theme.jsx';
import CreateSessionPage from './pages/CreateSessionPage.jsx';

const AppLayout = () => (
	<>
		<Navbar/>
		<Outlet/>
	</>
);

const router = createBrowserRouter([
	{
		element: <AppLayout/>,
		children: [
			{
				path: '/',
				element: <HomePage/>
			},
			{
				path: '/create',
				element: <CreatePage/>
			},
			{
				path: '/create-session',
				element: <CreateSessionPage/>
			},
			{
				path: '/join',
				element: <JoinPage/>
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={ theme }>
		<ColorModeScript initialColorMode={ theme.config.initialColorMode }/>
		<RouterProvider router={ router }/>

	</ChakraProvider>
);
