import React , {useState} from 'react';
import { useMediaQuery } from '@mui/material';
import { AppBar, Toolbar, Typography,Chip, TextField,FormControl,InputLabel,Select, Button,Menu,   MenuItem,    IconButton, Box, Container ,Card , CardContent ,useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Step1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventType, setEventType] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const steps = [
    {
      title: 'Tell us about your event',
      description: 'Maximize your outreach with our intuitive email marketing tool. Design stunning emails.',
    },
    {
      title: 'Make it stand out',
      description: 'Maximize your outreach with our intuitive email marketing tool. Design stunning emails.',
    },
    {
      title: 'Finish and publish',
      description: 'Maximize your outreach with our intuitive email marketing tool. Design stunning emails.',
    },
  ]
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleEventCategoryChange = (event) => {
    setEventCategory(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navItems = ["Events", "POS", "Insights", "Manage Team"];
  const tags = ['Comedy', 'DJ', 'Experience', 'Open Mic', 'Music', 'Exhibition & Trade Fair', 'Sketch', 'Hip-Hop', 'Workshops', 'Techno'];
  const eventTypes = ['Conference', 'Webinar', 'Workshop', 'Meetup'];
  const eventCategories = ['Technology', 'Education', 'Health', 'Business'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh',maxWidth:'100vw' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ height: "10%", width: "100%", backgroundColor: '#000000' }}>
        <Container maxWidth="100%">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img 
          src={logo}
          alt="Spoto Logo" 
          style={{ height: '50px', width: 'auto' }}
        />
        
        {isMobile ? (
          <>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem key={item} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((text) => (
              <Button 
                key={text} 
                sx={{  
                  color: '#EEEEEE', 
                  marginRight: 2, 
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  textTransform: "none" 
                }} 
              >
                {text}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#9e69f6', 
              marginRight: 2, 
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              padding: { xs: '6px 12px', sm: '8px 16px' },
              textTransform: "none",
              display: { xs: 'none', sm: 'inline-flex' }
            }} 
          >
            Create Event
          </Button>
          <IconButton 
            sx={{ 
              color: '#EEEEEE', 
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } 
            }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#EEEEEE', 
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              ml: 1
            }}
            aria-label="notifications"
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#EEEEEE', 
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              ml: 1
            }}
            aria-label="user account"
          >
            <AccountCircleIcon />
          </IconButton>
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>   
       {/* Main Content */}
  <Box sx={{height:"0.5%" ,paddingTop:"2%", backgroundColor: '#000000',  display:"flex", gap:"2%" }}>
   <Box sx={{height:"100%" , backgroundColor:"#b4f440" , width:"31%"}}>
     <span>.</span>
   </Box>
   <Box sx={{height:"100%" , backgroundColor:"white" , width:"31%"}}>
     <span>.</span>
   </Box>
   <Box sx={{height:"100%" , backgroundColor:"white" , width:"31%"}}>
     <span>.</span>
   </Box>
  </Box>
  <Box
      sx={{
        minHeight: '85%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent:"center",

        padding: { xs: '2rem', sm: '3rem', md: '4rem' },
      }}
    >
      <Box sx={{width:"40%" , height:"40%" ,         
      marginLeft: { xs: '2rem', sm: '3rem', md: '4rem' },
      }}>
        <img src={logo} alt="" />
      </Box>
     <Box sx={{width:"40%" , height:"40%" , display:"flex" , flexDirection:"column", gap:"1rem"}}>
      <Box>
      <Typography variant="h6" sx={{ fontSize:"0.7rem", color: '#aaa', marginBottom: '0.5rem' }}>
        Step 1
      </Typography>

      {/* Main Header: Tell us about your event */}
      <Typography variant="h4" sx={{ color: '#fff', fontSize:"1rem", fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Tell us about your event
      </Typography>

      {/* Description Text */}
      <Typography variant="body1" sx={{ color: '#aaa' }}>
        Maximize your outreach with our intuitive email marketing tool. Design stunning emails.
      </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column",  marginBottom: "2rem" }}>
      {/* Company Name/Host */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <Typography sx={{ color: "darkgray", fontWeight: "bold" }}>Company Name/Host</Typography>
        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <input
            type="text"
            id="company-input"
            placeholder="Company Name"
            style={{
              backgroundColor: '#222',
              color: '#fff',
              border: '1px solid #555',
              padding: '10px',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '16px',
            }}
            onMouseOver={(e) => (e.target.style.border = '1px solid #888')}  // Hover effect
            onMouseOut={(e) => (e.target.style.border = '1px solid #555')}   // Reset hover effect
            onFocus={(e) => (e.target.style.border = '1px solid #555')}      // Remove focus effect
          />
        </FormControl>
      </Box>

      {/* Choose Event Type */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <Typography sx={{ color: "darkgray", fontWeight: "bold" }}>Choose Event Type</Typography>
        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <select
            id="event-type"
            defaultValue=""
            style={{
              backgroundColor: '#222',
              color: '#fff',
              border: '1px solid #555',
              padding: '10px',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '16px',
            }}
            onMouseOver={(e) => (e.target.style.border = '1px solid #888')}  // Hover effect
            onMouseOut={(e) => (e.target.style.border = '1px solid #555')}   // Reset hover effect
            onFocus={(e) => (e.target.style.border = '1px solid #555')}      // Remove focus effect
          >
            <option value="" disabled>Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FormControl>
      </Box>

      {/* Choose Event Category */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <Typography sx={{ color: "darkgray", fontWeight: "bold" }}>Choose Event Category</Typography>
        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <select
            id="event-category"
            defaultValue=""
            style={{
              backgroundColor: '#222',
              color: '#fff',
              border: '1px solid #555',
              padding: '10px',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '16px',
            }}
            onMouseOver={(e) => (e.target.style.border = '1px solid #888')}  // Hover effect
            onMouseOut={(e) => (e.target.style.border = '1px solid #555')}   // Reset hover effect
            onFocus={(e) => (e.target.style.border = '1px solid #555')}      // Remove focus effect
          >
            <option value="" disabled>Select event category</option>
            {eventCategories.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FormControl>
      </Box>
    </Box>
      </Box>
     </Box>
     </div>
  );
};

export default Step1;
