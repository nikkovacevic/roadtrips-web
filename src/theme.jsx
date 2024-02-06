import { extendTheme } from '@chakra-ui/react';

const theme = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true
	},
	// components: {
	// 	Button: {
	// 		variants: {
	// 			spotify: {
	// 				bg: 'spotify',
	// 				color: 'white',
	// 				_hover: {
	// 					bg: 'neutral.900'
	// 				}
	// 			}
	// 		}
	// 	}
	// },
	colors: {
		spotify: {
			100: '#1DB954',
			200: '#1DB954',
			300: '#1DB954',
			400: '#1DB954',
			500: '#1DB954'
		},
		neutral: {
			100: '#161A1D',
			200: '#22272B',
			300: '#2C333A',
			400: '#454F59',
			500: '#596773',
			600: '#738496',
			700: '#8C9BAB',
			800: '#9FADBC',
			900: '#B6C2CF',
			1000: '#C7D1DB',
			1100: '#DEE4EA'
		},

		hoverLight: '#B6C2CF',
		hoverDark: '#2C333A'
	},
	styles: {
		global: (props) => ({
			'@import': 'url(\'https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap\');',
			html: {
				padding: 0,
				margin: 0,
				fontFamily: '\'Inter\', sans-serif',
				fontWeight: 500,
				letterSpacing: '1px'
			},
			body: {
				padding: 0,
				margin: 0,
				fontFamily: '\'Inter\', sans-serif',
				fontWeight: 500,
				letterSpacing: '1px'
			}
		})
	}
};

export default extendTheme(theme);