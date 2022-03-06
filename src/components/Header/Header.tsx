import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Header = () => {
    return (
        <AppHeader position="static" style={{ backgroundColor: theme.colors.mughalGreen }}>
            <Toolbar variant="dense">
                <AppLogo src="https://ih1.redbubble.net/image.1150456901.4718/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
                <Typography variant="h5" color="inherit" component="div">
                    Breaking Bad Characters
                </Typography>
            </Toolbar>
        </AppHeader>
    )
}

const AppHeader = styled(AppBar)({
    height: 120,
    justifyContent: 'center'
});

const AppLogo = styled(Avatar)(({ theme }) => ({
    marginRight: theme.spacing.base
}));