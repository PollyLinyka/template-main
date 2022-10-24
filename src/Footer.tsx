import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "react-multi-carousel/lib/styles.css";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { useStyles } from './components/styles';

function Footer() {
    const classes = useStyles();

    return (
    <footer>
        <Grid container spacing={0} columns={{ xs: 2, sm: 8, md: 12 }} className = {classes.footerList}>
            <Grid item xs={12} md>
                <Typography sx={{ mt: 5, mb: 3 }} variant="h6" color = 'gray' component="div" align = "center">
                    COMPANY
                </Typography>
                 <nav aria-label="first column">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="About Last.fm" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Jobs" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>

            <Grid xs={12} md>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color = 'gray' component="div" align = "center">
                    HELP
                </Typography>
                <nav aria-label="second column">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Track My Music" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Community Support" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Community Guideline" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Help" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>

            <Grid xs={12} md>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color = 'gray' component="div" align = "center">
                    GOODIES
                </Typography>
                <nav aria-label="third column">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Download Scrobbler" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Developer API" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Free Music Downloads" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Merchendise" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>

            <Grid xs={12} md>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color = 'gray' component="div" align = "center">
                    ACCOUNT
                </Typography>
                <nav aria-label="fourth column">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Last.fm Pro" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>

            <Grid xs={12} md>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color = 'gray' component="div" align = "center">
                    FOLLOW US
                </Typography>
                <nav aria-label="fifth column">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Facebook" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Twitter" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Instagram" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Youtube" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Grid>
        </Grid>

        <Box className = {classes.footerList}
        sx = {{
            typography: 'body1',
            '& > :not(style) + :not(style)': {ml: 2},
        }}
        >
            <Link href="#" aria-disabled>English</Link>
            <Link href="#">Deutsch</Link>
            <Link href="#">Español</Link>
            <Link href="#">Français</Link>
            <Link href="#">Italiano</Link>
            <Link href="#">日本語</Link>
            <Link href="#">Polski</Link>
            <Link href="#">Português</Link>
            <Link href="#">Русский</Link>
            <Link href="#">Svenska</Link>
            <Link href="#">Türkçe</Link>
            <Link href="#">简体中文</Link>
            <Typography> 
                CBS Interactive © 2022 Last.fm Ltd. All rights reserved. Terms of Use. Privacy Policy. Legal Policies. Cookies Policy. Cookie Information. Jobs at ViacomCBS Last.fm Music
            </Typography>
        </Box>
    </footer>
    );
}

export default Footer; 