import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, Typography, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 3, pt: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Sidebar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className='flex items-center ml-5 mt-2'>
                <ChevronLeftIcon className='text-gray-500 border border-slate-300 rounded-full p-0.5 cursor-pointer mr-4' />
                <Typography variant='subtitle2'>
                    Back to leads
                </Typography>
            </div>
            <div className='w-full flex justify-center'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 60, height: 60 }}>JB</Avatar>
                    <Typography variant='h6'>Jerome Bell</Typography>
                    <div className='flex justify-between items-center space-x-1 mb-2'>
                        <img src='google-vector.jpg' alt='logo' className='w-4 h-4' />
                        <Typography variant='body2' className='text-gray-500'>Google</Typography>
                    </div>

                    <div className='flex justify-center space-x-5 items-center'>
                        <div className='flex flex-col'><AddIcon className='text-gray-400 border border-slate-300 rounded-full p-0.5 cursor-pointer' /><Typography variant='caption' className='text-10 text-gray-500'>Log</Typography></div>
                        <div className='flex flex-col'><MailOutlineIcon className='text-gray-400 border border-slate-300 rounded-full p-0.5 cursor-pointer' /><Typography variant='caption' className='text-10 text-gray-500'>Email</Typography></div>
                        <div className='flex flex-col'><CallIcon className='text-gray-400 border border-slate-300 rounded-full p-0.5 cursor-pointer' /><Typography variant='caption' className='text-10 text-gray-500'>Call</Typography></div>
                        <div className='flex flex-col'><MoreHorizIcon className='text-gray-400 border border-slate-300 rounded-full p-0.5 cursor-pointer' /><Typography variant='caption' className='text-10 text-gray-500'>More</Typography></div>
                    </div>

                    <div className='mt-2'>
                        <Button variant='contained' color='warning'>Convert to contact</Button>
                    </div>

                    <div className='flex justify-center space-x-1 mt-1'>
                        <FiberManualRecordIcon className='text-green-500 p-1.5' />
                        <Typography variant='caption' className='text-gray-500'>
                            Last activity: 2 Jan 2020 at 09:00 AM
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='w-full flex justify-center'>
                        <Tabs value={value} onChange={handleChange}
                            textColor="black"
                            indicatorColor="primary"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#000000",
                                }
                            }}
                            aria-label="basic tabs example">
                            <Tab label="Leads info" {...a11yProps(0)} />
                            <Tab label="Address info" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div>
                            <div>
                                <Typography variant='caption' className='text-gray-400'>Email</Typography>
                                <Typography variant='body2'>emailkuyahut@gmail.com</Typography>
                            </div>
                            <div>
                                <Typography variant='caption' className='text-gray-400'>Phone</Typography>
                                <Typography variant='body2'>(405) 555-0128</Typography>
                            </div>
                            <div>
                                <Typography variant='caption' className='text-gray-400'>Lead owner</Typography>
                                <Typography variant='body2'>Esther Howard</Typography>
                            </div>
                            <div>
                                <Typography variant='caption' className='text-gray-400'>Job Title</Typography>
                                <Typography variant='body2'>Content Writer</Typography>
                            </div>
                            <div>
                                <Typography variant='caption' className='text-gray-400'>Annual revenuew</Typography>
                                <Typography variant='body2'>$ 5,000</Typography>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <Typography variant='caption' className='text-gray-400'>Lead source</Typography>
                                    <Typography variant='body2'>Online store</Typography>
                                </div>
                                <ExpandMoreIcon fontSize='small' className='text-gray-400 cursor-pointer' />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                </Box>
            </div>
        </div>
    )
}
