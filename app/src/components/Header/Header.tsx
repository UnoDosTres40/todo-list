import { AppBar, Container, Toolbar, Typography, Box, Button } from '@mui/material';

import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<AppBar sx={{ position: 'fixed', top: '0', left: '0' }}>
			<Container>
				<Toolbar>
					<Typography>T0-D0</Typography>
				</Toolbar>
				<Box>
					<Button>
						<NavLink to="/">Список заметок</NavLink>
					</Button>

					<NavLink to="/create-note">Создать заметку</NavLink>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Header;
