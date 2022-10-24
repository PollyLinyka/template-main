import Typography from '@mui/material/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import carousel1 from './images/Carousel1.png';
import carousel2 from './images/Carousel2.png';
import carousel3 from './images/Carousel3.png';
import carousel4 from './images/Carousel4.png';
import carousel5 from './images/Carousel5.png';
import carousel6 from './images/Carousel6.png';
import carousel7 from './images/Carousel7.png';
import carousel8 from './images/Carousel8.png';

import { useStyles } from './components/styles';

function MCarousel() {
    const classes = useStyles();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
          }
      };
    
    return (
    <footer>
        <Carousel responsive = {responsive}
        infinite = {true}
        additionalTransfrom = {0}
        containerClass = "container"
        focusOnSelect = {false}
        minimumTouchDrag = {80}
        renderArrowsWhenDisabled = {false}
        renderButtonGroupOutside = {false}
        renderDotsOutside = {false}
        className = {classes.carouselSettings}
        itemClass = "carousel-item-padding-10-px">
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel1}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            6 artists that blew our minds at Noise Pop Festival 2020
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel2}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            Exploring the local sounds and scenes at Noise Pop 2020
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel3}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            Austin City Limits '21 - our photo recap (Fest.FM)
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel4}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            On the rise: a Women's History Month playlist
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel5}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            Last.fm's 2021 Outside Lands photo recap (Fest.FM)
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel6}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            Shaky Knees '21 - our photo recap (Fest.FM)
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel7}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            Girls to the front: celebrating the sounds of Riot Grrrl
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div> 
                <Card component="li" sx={{ width: 400, flexGrow: 1, '--Card-radius': (theme) => theme.vars.radius.xs }}>
                    <CardCover>
                        <img src = {carousel8}/>
                    </CardCover>
                    <CardCover
                        sx={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}/>
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography mt = {{ xs: 12, sm: 18 }} variant="h6" color = 'white'>
                            We look at the artists you should know at Outside Lands 2021
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Carousel>
    </footer>
    )
}

export default MCarousel; 
