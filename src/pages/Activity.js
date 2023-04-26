import React from 'react'
import FilterInputs from './FilterInputs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AgeFilter from './AgeFilter';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default function Activity() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const [age, setAge] = React.useState('');
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <div className='flex flex-row items-center'>

                <FilterInputs />
                <AgeFilter />

            </div>

            <div className='p-3'>
                <Typography sx={{ fontWeight: 600 }}>
                    Upcoming Activity
                </Typography>
            </div>

            <Card sx={{ maxWidth: 900 }}>
                <CardHeader

                    avatar={
                        <>
                            <KeyboardArrowDownIcon />
                            <EventNoteIcon sx={{ color: "blue" }} />
                        </>

                    }
                    action={
                        <>
                            <IconButton aria-label="settings">
                                <Typography sx={{
                                    fontWeight: 500,
                                }}>Due:
                                    <CalendarTodayIcon />
                                    Today: 12:00 pm
                                </Typography>

                                <MoreHorizIcon />
                            </IconButton>
                        </>
                    }
                    title="Task Created Ester"
                />
                <Divider />

                <CardContent>
                    <div className='flex flex-row pb-3'>

                        <div>
                            <CircleIcon className="text-gray-100" />
                        </div>
                        <div className='pl-3'>
                            <p style={{ fontWeight: 700 }}>Prepare Quote For Jerome Bell</p>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </div>

                    </div>

                    <div className='border 1px solid gray p-3' style={{ borderRadius: 10 }} >

                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Reminder</p>
                                <p style={{ fontSize: 14 }}> No Reminder</p>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Task Priority</p>
                                <p style={{ fontSize: 14 }}>High</p>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Assigned to</p>
                                <p style={{ fontSize: 14 }}>Esther Howard</p>
                            </div>

                        </div>
                    </div>

                </CardContent>
            </Card>

            <div className='pt-8'>

                <Card sx={{ maxWidth: 900 }} >
                    <CardHeader
                        avatar={
                            <>
                                <KeyboardArrowRightIcon />
                                <EventNoteIcon sx={{ color: "blue" }} />
                            </>

                        }
                        action={
                            <>
                                <IconButton aria-label="settings">
                                    <Typography sx={{
                                        fontWeight: 500,
                                    }}>Due:
                                        <CalendarTodayIcon />
                                        Today: 12:00 pm
                                    </Typography>

                                    <MoreHorizIcon />
                                </IconButton>
                            </>
                        }
                        title="Task Created Ester"
                    />
                    <Divider />

                    <CardContent>
                        <div className='flex flex-row pb-3'>

                            <div>
                                <CircleIcon className="text-gray-100" />
                            </div>
                            <div className='pl-3'>
                                <p style={{ fontWeight: 700 }}>Prepare Quote For Jerome Bell</p>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </div>

                        </div>

                        {/* <div className='border 1px solid gray p-3' style={{ borderRadius: 10 }} >

                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Reminder</p>
                                <p style={{ fontSize: 14 }}> No Reminder</p>
                            </div>
              
                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Reminder</p>
                                <p style={{ fontSize: 14 }}> No Reminder</p>
                            </div>

                            <div className='flex flex-col'>
                                <p style={{ fontSize: 12, color: "gray" }}>Reminder</p>
                                <p style={{ fontSize: 14 }}> No Reminder</p>
                            </div>

                        </div>
                    </div> */}

                    </CardContent>
                </Card>

            </div>

            <div className='p-3'>
                <Typography sx={{ fontWeight: 500 }}>
                    Activity History
                </Typography>
            </div>

            <div>
                <h1 style={{ fontSize: 16 }}>12 December 2021</h1>
            </div>
            <div className='pt-4'>

                <Card sx={{ maxWidth: 900 }}>
                    <CardHeader
                        avatar={
                            <>
                                <KeyboardArrowRightIcon />
                                <EventNoteIcon sx={{ color: "blue" }} />
                            </>

                        }
                        action={
                            <>
                                <IconButton aria-label="settings">
                                    <Typography sx={{
                                        fontWeight: 500,
                                    }}>Due:
                                        <CalendarTodayIcon />
                                        Today: 12:00 pm
                                    </Typography>

                                    <MoreHorizIcon />
                                </IconButton>
                            </>
                        }
                        title="Task Created Ester"
                    />
                    <Divider />

                    <CardContent>
                        <div className='flex flex-row pb-3'>

                            <div>
                                <CircleIcon className="text-green-500" />
                            </div>
                            <div className='pl-3'>
                                <p style={{ fontWeight: 700 }}>Prepare Quote For Jerome Bell</p>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </div>

                        </div>

                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
