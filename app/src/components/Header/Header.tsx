import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import '../../theme';
import { NavLink } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChecklistIcon from '@mui/icons-material/Checklist';

export const Header = () => {
	return (
		<AppBar
			sx={{height:"8vh", position:"sticky", width:"100%", mb:"1vh"}}

		>

					<Toolbar
						sx={{display:'flex', gap:'3', justifyContent:"space-between"}}
					>
						<Button
							variant='text'
						>
							<NavLink to='/'>
								<Typography
									variant='h5'
									sx={{color:'common.white'}}
								>T0-D0</Typography>
							</NavLink>
						</Button>
						<Box
						 sx={{display:'flex', gap:3}}
						>
							<Button
								variant="contained"
								sx={{backgroundColor:"common.white"}}
							>
								<NavLink to="/note-list">

									<Typography
										sx={{display:'flex', alignItems:'center', gap:2}}
									>Список заметок <ChecklistIcon/></Typography>
								</NavLink>
							</Button>
							<Button
								variant="contained"
								sx={{backgroundColor:"common.white"}}
							>
								<NavLink to="/create-note">

									<Typography
										sx={{display:'flex', alignItems:'center', gap:2}}
									>Создать заметку <AddBoxIcon/></Typography>
								</NavLink>

						</Button>
						</Box>


					</Toolbar>
		</AppBar>
	);
};

export default Header;
