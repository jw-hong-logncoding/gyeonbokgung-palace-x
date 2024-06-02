import React from "react";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import useUserData from "../../hooks/useUserData";
import { removeFromLocalStorage } from "../../functions/localStorageFunctions";
import { LOCAL_STORAGE_KEYS } from "../../enums";

const drawerWidth = 240;

function DrawerAppBar(props) {
    // eslint-disable-next-line react/prop-types
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { userData } = useUserData();
    const navigate = useNavigate();
    console.log(userData);

    const navItems = [
      { title: 'Home', onClick: () => {} },
      { title: 'About', onClick: () => {} },
    ];
    
    if (userData) {
      navItems.push(...[
        { title: 'Map', onClick: () => {} },
        { title: 'Community', onClick: () => {
          navigate('/community');
        } },
        { title: 'My Page', onClick: () => {} },
      ]);
    }
 
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const handleCloseMenu = () => {
      setAnchorEl(null);
    }

    const handleLogout = () => {
      handleCloseMenu();
      removeFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
      navigate(0);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          GyeongbokgungPalaceX
        </Typography>
        <Divider />
        <List>
          {navItems.map(({title, onClick }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={onClick}>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex'}}>
        <AppBar component="nav" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              G P X
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(({title, onClick}) => (
                <Button key={title} sx={{ color: '#fff' }} onClick={onClick}>
                  {title}
                </Button>
              ))}
            </Box>
            <Box>

            </Box>
            {userData &&
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
              </IconButton>
            }
            
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
                onClick={handleCloseMenu}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    );
  }

export default DrawerAppBar;