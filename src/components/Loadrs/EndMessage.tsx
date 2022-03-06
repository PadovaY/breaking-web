import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

export const EndMessage = () => <EndLoadMessage>
    <Typography variant="h6" style={{ color: 'white' }}>Yay! You have seen it all 😎</Typography>
</EndLoadMessage>


const EndLoadMessage = styled.div(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing.medium
}));
