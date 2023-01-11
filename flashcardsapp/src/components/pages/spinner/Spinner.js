import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box';

export default function Spinner() {
    return(
        <>
            <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                <CircularProgress color="primary" size="lg" variant="plain" />
            </Box>
        </>
    );
}