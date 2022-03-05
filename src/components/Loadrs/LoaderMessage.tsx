import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const LoaderMessage = () => <Loader><Typography variant="caption" style={{ color: 'white' }}>Loading...</Typography></Loader>

const Loader = styled.div(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing.medium
}));
