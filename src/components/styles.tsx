import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }, 
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#4C4C4C",
    },
    title: {
        flexGrow: 1
    },
    imageAlbum: {
        marginLeft: theme.spacing(-18)
    }, 
    logo: {
        marginLeft: theme.spacing(49.5)
    }, 
    radioDefault: {
        marginLeft: theme.spacing(5),
    }, 
    buttonRight: {
        color: "#C6C6C6", 
        variant: "text",
        fontSize: '12px',
        '&:hover': {
            color: "inherit"
        }
    }, 
    toRight: {
        marginLeft: theme.spacing(29)
    }, 

    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white, 
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(3), 
        marginTop: theme.spacing(6)
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,0.1)"
    }, 

    cardGrid: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(10)
    },
    cardButton: {
        size: "md",
        position: 'absolute',
        zIndex: 2,
        borderRadius: '50%',
        right: '1rem',
        bottom: 0,
        transform: 'translateY(50%)',
    },

    cards: {
        maxWidth: 300, 
        flexGrow: 1,
        paddingTop: "56.25%"
    },
    iconMaterial: {
        color: "#fff"
    },

    carouselSettings: {
        paddingTop: "5%"
    },

    footerList: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },

    type: {
        marginLeft: theme.spacing(180)
    }
}))