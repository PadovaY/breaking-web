import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

export const LoaderMessage = () => <Loader data-testid="loader"><Typography variant="caption" style={{ color: 'white' }}>Loading...</Typography></Loader>

const Loader = styled.div(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing.medium
}));
