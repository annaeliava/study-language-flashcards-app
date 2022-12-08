import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "@fontsource/genos/700.css";
import styles from './Header.module.scss';
import 'normalize.css';

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

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
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
              <Link to='/' className={styles.links}>
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
              <IconButton
                sx={{
                  display: { xs: 'none', sm: 'block', },
                  marginLeft: 45,
                }}>
                <img className={styles.myaccountMUI} src='img/userpic.svg' alt='My account' />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
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
              {['Dictionary', 'Flashcards', 'My Account'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <Link to='/' className={styles.links}>
                      <ListItemText primary={text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
      <header className={styles.mainContainer}>
        <div className={styles.container}>
          <Link to='/' className={styles.links}>
            <div className={styles.title}>IKNOWTHIS</div>
          </Link>
          <nav className={styles.navContainer}>
            <div className={styles.currentLanguage}>EN</div>
            <Link to='/' className={styles.links}>
              <img className={styles.homeBtn} src='img/header_home-icon.svg' alt='Home' />
            </Link>
            <Link to='/users' className={styles.links}>
              <img className={styles.myaccount} src='img/userpic.svg' alt='My account' />
            </Link>
          </nav>
        </div>
        <div className={styles.headerLine}></div>
      </header>
    </>
  );
}