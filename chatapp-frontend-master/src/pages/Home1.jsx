import React from 'react';
import { Box, Typography, Button, IconButton, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Notifications, AccountCircle } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import MessageIcon from '@mui/icons-material/Message';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FeedbackIcon from '@mui/icons-material/Feedback';

function Home1() {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box 
        sx={{
          width: '256px', 
          bgcolor: 'primary.main', 
          color: 'white', 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <Box mb={4}>
          <Typography variant="h4" fontWeight="bold" lineHeight={1.2} color="white">
            Campus <br /> Connect
          </Typography>
        </Box>

        {/* Navigation */}
        <nav>
          <List>
            <ListItem button component="a" href="#">
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component="a" href="/Home">
              <ListItemIcon>
                <ChatIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              {/* <ListItemText primary="Group chats" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component="a" href="/Home">
              <ListItemIcon>
                <MessageIcon sx={{ color: 'white' }} />
              </ListItemIcon> */}
              <ListItemText primary="Private & Group messages " sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component="a" href="/h">
              <ListItemIcon>
                <EventIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Event management" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem button component="a" href="/TimeMang">
              <ListItemIcon>
                <ScheduleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Time-table queries" sx={{ color: 'white' }} />
            </ListItem>
            
            <ListItem button component="a" href="#">
              <ListItemIcon>
                <FeedbackIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <a href="https://wa.me/918770584251"><ListItemText primary="Feedback & Help" sx={{ color: 'white' }} /></a>
            </ListItem>
          </List>
        </nav>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box flex="1" bgcolor="grey.100" display="flex" flexDirection="column">
        {/* Header */}
        <Box 
          bgcolor="primary.main" 
          p={2} 
          display="flex" 
          justifyContent="flex-end" 
          alignItems="center"
        >
          {/* <IconButton color="inherit">
            <Notifications fontSize="large" />
          </IconButton> */}
          {/* <IconButton color="inherit" >
            <AccountCircle fontSize="large" path='admin/logout'/>
          </IconButton> */}
          
        </Box>

        {/* Welcome Card */}
        <Box 
          bgcolor="primary.main" 
          color="white" 
          borderRadius={2} 
          p={3} 
          m={3} 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">Welcome back, User!</Typography>
            <Typography>Stay Updated Always</Typography>
          </Box>
          <Avatar 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-big-books-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-learning-online-education-using-study-attending-class-back-to-school-pack-illustrations-4779537.png?f=webp" 
            alt="Welcome" 
            sx={{ width: 120, height: 120 }}
          />
        </Box>

        {/* Buttons */}
        <Box display="flex" justifyContent="center" gap={4} mt={4}>
          <a href='/Home'><Button variant="contained" color="primary" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
            Start messaging
          </Button></a>
          <a href='/h'><Button variant="contained" color="primary" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
            View upcoming events
          </Button></a>
        </Box>
      </Box>
    </Box>
  );
}

export default Home1;