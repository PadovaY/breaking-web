import React from 'react';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import styled from 'styled-components';

interface TextProps {
    text: string;
    variant?: "inherit" | Variant;
}

export const Text: React.FC<TextProps> = ({ text, variant = 'subtitle1' }) => {
    return (
        <TypographyStyled variant={variant} >{text}</TypographyStyled>
    )
}

const TypographyStyled = styled(Typography)(({ theme }) => ({
    paddingRight: theme.spacing.petit
}))