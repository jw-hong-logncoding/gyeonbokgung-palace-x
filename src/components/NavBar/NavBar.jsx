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
import { generateRandomString } from "../../functions/stringFunctions";
import { startTransition } from "react";
import logo from '../../assets/images/logo.png';

const drawerWidth = 130;
function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { userData } = useUserData();
    const navigate = useNavigate();

    const navItems = [
        { title: 'Home', onClick: () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            navigate('/');
        }},
        { title: 'About', onClick: () => {
            navigate('/?page=about' + generateRandomString(5))
        }},
    ];
    
    if (userData) {
        navItems.push(...[
            { title: 'Map', onClick: () => {
                startTransition(() => {
                    navigate('/map');
                })
            }},
            { title: 'Review', onClick: () => {
                startTransition(() => {
                    navigate('/community');
                })
            }},
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
        if (location.pathname === '/') {
            window.location.reload();
        }
        navigate('/');
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box marginTop="50px" />
            <Divider />
            <List>
                {navItems.map(({ title, onClick }) => (
                    <ListItem key={title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={onClick}>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="fixed" sx={{ zIndex: "10000001" }}>
                <Toolbar edge="start" variant="dense">
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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: "'NanumMyeongjo', Times, serif" }}
                    >
                        <img src={logo} alt="Logo" style={{ height: '18px', marginTop: '10px'  }} />  
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ title, onClick }) => (
                            <Button key={title} sx={{ color: '#fff', fontFamily: "'NanumMyeongjo', Times, serif" }} onClick={onClick}>
                                {title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: { xs: 1, sm: 0 } }}></Box>
                    {userData &&
                        <IconButton
                            edge="end"
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
                        sx={{ zIndex: "10000002", left: "10px", top: "23px" }}
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)}
                        onClick={handleCloseMenu}
                    >
                        <MenuItem onClick={() => {
                            startTransition(() => {
                                navigate('/my-page');
                            })
                        }}>My Page</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                    sx={{
                        width: "100%",
                        zIndex: "10000000",
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, fontFamily: "'NanumMyeongjo', Times, serif" },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default DrawerAppBar;
