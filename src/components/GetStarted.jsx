  import React from 'react';
  import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container ,Card , CardContent } from '@mui/material';
  import SearchIcon from '@mui/icons-material/Search';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import AccountCircle from '@mui/icons-material/AccountCircle';

  const GetStarted = () => {
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
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar */}
        <AppBar position='sticky' color="default" sx={{ height:"10%", backgroundColor: '#000000' }}>
          <Container maxWidth="100%">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ margin:0, fontWeight: 'bold', color: '#93e849' }}>
                SPOTO
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Nav Links */}
                <Button sx={{ color: '#EEEEEE', marginRight: 2 }}>Events</Button>
                <Button sx={{ color: '#EEEEEE', marginRight: 2 }}>POS</Button>
                <Button sx={{ color: '#EEEEEE', marginRight: 2 }}>Insights</Button>
                <Button sx={{ color: '#EEEEEE', marginRight: 2 }}>Manage Team</Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" sx={{ backgroundColor: '#9e69f6', marginRight: 2 }}>
                  Create Event
                </Button>
                {/* Icons */}
                <IconButton sx={{ color: '#EEEEEE' }}>
                  <SearchIcon />
                </IconButton>
                <IconButton sx={{ color: '#EEEEEE' }}>
                  <NotificationsIcon />
                </IconButton>
                <IconButton sx={{ color: '#EEEEEE' }}>
                  <AccountCircle />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Main Content */}
        <Box
          sx={{
            height:"90%",
            backgroundColor: '#000000',
            color: '#FFFFFF',
          }}
          maxWidth="100%"
        >
          <Box sx={{
            marginLeft:'20%',
            marginRight:'20%',
            marginTop:'3%',
          }}>
          <Typography variant="h6" sx={{color:"white"}} component="div">
            Its Easy To get started on spoto
          </Typography>
          <Box sx={{ mt: 2, maxWidth:"60%" }}>
            {steps.map((step, index) => (
              <Card key={index} sx={{ mb: 1 , backgroundColor:"black" , color:"white" }}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom style={{ fontSize: '1rem' }}>
                    {index + 1}. {step.title}
                  </Typography>
                  <Typography variant="body2" style={{ fontSize: '0.875rem' }}>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box >
          <Button
             sx={{ backgroundColor: '#9e69f6', color: '#fff' , width:"50%" }} // Use sx for styling
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
