import { createTheme } from '@mui/material/styles';

export let theme = createTheme({});

theme = createTheme({
	palette: {
		primary: {
			main: '#5F33E1',
		},

		secondary: {
			main: '#EDE8FF',
			dark: '#E7F3FF',
			light: '#FFE9E1',
		},


		common: {
			white: '#ffffff',
			black: '#000000',
		},
	},

	typography: {
		fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 16,

		h1: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h2: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 40,
		},
		h3: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 30,
		},
		h4: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 24,
		},
		h5: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 20,
		},
		h6: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 14,
		},
	},

	spacing: 10,
});

export default theme;
