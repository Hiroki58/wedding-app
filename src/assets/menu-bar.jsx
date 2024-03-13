import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';



export default function menuBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color='secondary' href="/" component={Link}>
              Alicia & Hiroki's Wedding
            </Button>
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to={`question`}><MenuItem onClick={handleClose}>Please answer these questions</MenuItem></Link>
            <Link to={`about`}><MenuItem onClick={handleClose}>About us</MenuItem></Link>
            <Link to={`playlist`}><MenuItem onClick={handleClose}>Music playlist</MenuItem></Link>
            <Link to={`photo`}><MenuItem onClick={handleClose}>Photo contest</MenuItem></Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}