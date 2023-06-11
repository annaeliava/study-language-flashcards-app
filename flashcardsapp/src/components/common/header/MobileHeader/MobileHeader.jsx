import React, { useState } from "react";
import styles from './Mobile.module.scss';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    Toolbar,
    Typography
} from '@mui/material';
import {
    styled,
    useTheme,
    ThemeProvider,
    createTheme
} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'normalize.css';
import HeaderList from "./HeaderList/HeaderList";

const headerMobile = createTheme({
    palette: {
        background: {
            body: '#E0F0FA',
        },
        text: {
            primary: '#000000',
        },
        details: {
            blue: '#6BB3E7',
        }
    },
});

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const lists = [
    { text: 'Dictionary', link: '/study-language-flashcards-app/dictionary' },
    { text: 'Flashcards', link: '/study-language-flashcards-app/game' }
];

export default function MobileHeader() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={headerMobile}>
            <Box sx={{
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' },
                flexGrow: 1,
            }}>
                <AppBar className={styles.headerMUI} component='nav' position="fixed" sx={{ backgroundColor: 'background.body', }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            sx={{ mr: 2, color: 'details.blue', ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/study-language-flashcards-app' className={styles.links}>
                            <IconButton>
                                <Typography component="div"
                                    sx={{
                                        flexGrow: 1,
                                        fontFamily: 'Genos',
                                        fontSize: 32,
                                        fontWeight: 700,
                                        color: 'details.blue',
                                    }}>
                                    IKNOWTHIS
                                </Typography>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: 'background.body',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {lists.map((list, index) => <HeaderList data={list} handleDrawerClose={handleDrawerClose} key={index} />)}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider >
    );
}