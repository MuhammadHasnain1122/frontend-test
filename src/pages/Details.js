import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Activity from './Activity';





export const Details = () => {



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '66ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


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
              <Box sx={{ p: 3 }}>
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

      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className='flex sm:flex-row flex-col' >
            <div className='w-1/4 border-r shadow-lg'>
                <Sidebar />
            </div>
            <div className="w-3/4 bg-slate-50">


 
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                </Typography> 
                <div className='pt-4'>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search activity, notes, email and more  "
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                </div>
                <div className='flex justify-center'>
                <div className="w-full pr-4">
                    <Divider/>
                </div>
                </div>


      <Box sx={{ paddingTop:3, paddingRight:2, paddingLeft:2}}>
        <Tabs value={value} onChange={handleChange}  style={{backgroundColor:"#eaeef7", color:"black", borderRadius:10}}
        className=' justify-between'
        sx={{
          "	.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":{
             color:"black",
             backgroundColor:"white",
             borderRadius:"10px"
          },
          ".css-1aquho2-MuiTabs-indicator":{
             backgroundColor:"#eaeef7",

          },
          ".css-heg063-MuiTabs-flexContainer": {
            display:"flex",
            justifyContent:"space-between"
          },
          ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root":{
            fontSize:12,
            textTransform:"capitalize"
          }
        }}>
          <Tab label="Activity" {...a11yProps(0)}  />
          <Tab label="Notes" {...a11yProps(1)} />
          <Tab label="Email" {...a11yProps(2)} />
          <Tab label="Calls" {...a11yProps(2)} />
          <Tab label="Tasks" {...a11yProps(2)} />
          <Tab label="Meetings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Activity/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
              

            </div>
        </div>
    )
}
