import React from 'react';
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import { theme } from '../../theme';

export const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: theme.colors.primary }}>
            <Toolbar variant="dense">
                <Avatar src="https://ih1.redbubble.net/image.1150456901.4718/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" style={{ marginRight: theme.spacing.base }} />
                <Typography variant="h6" color="inherit" component="div">
                    Breaking Bad Charcaters
                </Typography>
            </Toolbar>
        </AppBar>
    )
}