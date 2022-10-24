import React from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, Button, Box, ButtonGroup, Menu, MenuItem } from '@material-ui/core';
import { FastRewind, FastForward, PlayCircleOutline, FavoriteBorder, Search } from '@mui/icons-material'; 
import { Tooltip, Avatar } from '@mui/material';
import { ThemeProvider } from '@material-ui/core/styles';

import { useStyles } from './components/styles';
import { darkTheme } from './components/darkTheme';

import defaultAlbum from './images/player_default_album.png';
import logo_static from './images/logo_static.png';
import blueR from './images/Blue-rabbit-image.jpg'; 

const settings = ['Your profile', 'Notifications', 'Inbox', 'Bookmarks', 'Settings', 'Logout'];

function Header() {
    const classes = useStyles();
    
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme = {darkTheme}>
            <AppBar position = "fixed">
                <Container fixed>
                    <Toolbar disableGutters>
                        <img src = {defaultAlbum} className = {classes.imageAlbum}/>
                        <Toolbar className = {classes.radioDefault}>
                            <FastRewind className = {classes.menuButton}/> 
                            <PlayCircleOutline className = {classes.menuButton} fontSize="large"/> 
                            <FastForward className = {classes.menuButton}/> 
                            <FavoriteBorder className = {classes.menuButton} fontSize="small"/> 
                        </Toolbar>

                        <a href="/"> 
                            <img src = {logo_static} className = {classes.logo} />
                        </a>

                        <ButtonGroup size="small" className = {classes.toRight}> 
                            <Search className = {classes.buttonRight}/>
                            <Button className = {classes.buttonRight}> Home </Button>
                            <Button className = {classes.buttonRight}> Live </Button>
                            <Button className = {classes.buttonRight}> Music </Button>
                            <Button className = {classes.buttonRight}> Charts </Button>
                            <Button className = {classes.buttonRight}> Events </Button>
                            <Button className = {classes.buttonRight}> Features </Button>
                        </ButtonGroup>

                        <Box sx = {{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar alt="Blue" src={blueR} sx={{ width: 32, height: 32 }}/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id = "menu-appbar"
                                anchorEl = {anchorElUser}
                                anchorOrigin = {{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography> {setting} </Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;