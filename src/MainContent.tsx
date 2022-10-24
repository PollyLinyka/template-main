import React from 'react';
import { Container, Button, Box, Paper, Grid, Link } from '@material-ui/core';
import { PlayCircleFilled } from '@mui/icons-material'; 
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';

import { useStyles } from './components/styles';
import { cards } from './components/cardsSample'

function MainContent() {
    const classes = useStyles();

    return (
    <main>
        <Paper elevation={1} className = {classes.mainFeaturesPost}
        style = {{ color: "FFFFFF"}}>
            <Container fixed>
                <div className={classes.overlay}/>
                    <div className = {classes.mainFeaturesPostContent}>
                        <a href="/"> 
                            <Typography color = "primary" gutterBottom >
                                Popular right now
                            </Typography>
                        </a>
                    </div>
            </Container>
        </Paper>        

        <Container className = {classes.cardGrid} maxWidth = "md">
            <Grid container spacing = {3}>
                {cards.map((card) => (
                    <Grid item key = {card.id} xs = {12} sm = {6} md = {4}>
                        <Card component="li" sx={{ width: 200, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                            <CardCover>
                                <img
                                    src = {card.src}
                                />
                            </CardCover>
                            <CardCover
                                sx={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}/>
                            <CardContent sx = {{ justifyContent: 'flex-end' }}>
                                <Typography
                                    fontWeight = "lg"
                                    fontSize = {20}
                                    textColor = "#fff"
                                    mt={{ xs: 12, sm: 18 }}
                                >
                                {card.name}
                                </Typography>
                                <Typography
                                    fontSize = {14}
                                    textColor = "#fff"
                                >
                                {card.artistName}
                                </Typography>
                            </CardContent>
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    right: '1rem',
                                    top: -10, 
                                    left: -160, 
                                    transform: 'translateY(50%)',
                                }}
                                >
                                <PlayCircleFilled className = {classes.iconMaterial} fontSize = "large"/>
                            </IconButton>
                        </Card>
                    </Grid>        
                ))} 
            </Grid>
        </Container>
    </main>
  );
}

export default MainContent; 