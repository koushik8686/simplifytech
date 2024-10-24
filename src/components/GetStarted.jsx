  import React , {useState} from 'react';
  import { useMediaQuery } from '@mui/material';
  import { AppBar, Toolbar, Typography, Button,Menu,   MenuItem,    IconButton, Box, Container ,Card , CardContent ,useTheme } from '@mui/material';
  import SearchIcon from '@mui/icons-material/Search';
  import logo from './logo.jpg'
  import MenuIcon from '@mui/icons-material/Menu';
  import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';  
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  const GetStarted = () => {
    const [anchorEl, setAnchorEl] = useState(null);
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
    
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navItems = ["Events", "POS", "Insights", "Manage Team"];

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
    </AppBar>        {/* Main Content */}
        <Box
      sx={{
        minHeight: '90vh',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '2rem', sm: '3rem', md: '4rem' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '80%', md: '60%' },
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{
            color: "white",
            textAlign: { xs: 'center', sm: 'left' },
            marginBottom: '2rem',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          It's easy to get started on Spoto
        </Typography>
        <Box sx={{ mt: 2, width: "100%" }}>
          {steps.map((step, index) => (
            <Card 
              key={index} 
              sx={{ 
                mb: 2, 
                backgroundColor: "black", 
                color: "white",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
             <CardContent>
              <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {index + 1}
                <span style={{ marginLeft: '0.5rem' }}>{step.title}</span> 
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                  marginLeft: '2rem',
                }}
              >
                {step.description}
              </Typography>
            </CardContent>

            </Card>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mt: 4 }}>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#9e69f6', 
              color: '#fff',
              width: { xs: '100%', sm: 'auto' },
              padding: '0.75rem 2rem',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              '&:hover': {
                backgroundColor: '#8a4df0',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
      </div>
    );
  };

  export default GetStarted;
