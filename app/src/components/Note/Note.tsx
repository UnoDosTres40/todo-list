// import { CheckBox } from "@mui/icons-material"
// import { Button, Container, TextField, Typography } from "@mui/material"

// interface Props {
// 	date:string;
// 	title:string;
// 	notetext:string;
// }

// export const Note = (props: Props) => {

// 	const {date, title, notetext} = props;


// 	const [inputValue, setInputValue] = useState<string>('');

// 	const handleInputChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
// 		setInputValue(event.target.value);
// 	};

// 	return(
// 		<Container>
// 			<CheckBox/>
// 			<TextField>
// 				<Typography>{date}</Typography>
// 				<Typography>{title}</Typography>
// 				<Typography>{notetext}</Typography>
// 				<Button onClick={(e)=>handleInputChange(e)}>click</Button>
// 			</TextField>
// 		</Container>
// 	)
// }
