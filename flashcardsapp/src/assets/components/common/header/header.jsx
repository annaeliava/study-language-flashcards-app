import React from 'react';
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
  // necessary for content to be below app bar
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
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
          flexGrow: 1,
        }}>
          <AppBar component='nav' position="fixed" sx={{ backgroundColor: 'background.body', }}>
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
              <Typography component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Genos',
                  fontSize: 32,
                  fontWeight: 700,
                  color: 'text.primary',
                }}>
                IKNOWTHIS
              </Typography>
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
              {['Home', 'Dictionary', 'Flashcards', 'Language'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.title}>IKNOWTHIS</div>
          <div className={styles.currentLanguage}>EN</div>
          <img src='/flashcardsapp/src/assets/pics/header/header_home-icon.svg' alt='Home Icon' className={styles.homeBtn} />
          <img src="/flashcardsapp/src/assets/pics/common/userpic.svg" alt="Userpic" className={styles.myaccount} />
        </div>
        <div className={styles.headerLine}></div>
      </div>
    </>
  );
}