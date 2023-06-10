import React from "react";
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function HeaderList(props) {
    const { data, handleDrawerClose } = props;
    return (
        <>
            <Link to={data.link} style={{ textDecoration: 'none', color: 'black' }} >
                <ListItem key={data.text} disablePadding>
                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.text} />
                    </ListItemButton>
                </ListItem>
            </Link>
        </>
    );
}