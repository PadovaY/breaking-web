import React from 'react';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import styled from 'styled-components';

interface TextProps {
    text: string;
    variant?: "inherit" | Variant;
    color?: string
}

export const Text: React.FC<TextProps> = ({ text, variant = 'subtitle2', color }) => {
    return (
        <TypographyStyled variant={variant} textcolor={color}>{text}</TypographyStyled>
    )
}

const TypographyStyled = styled(Typography)<{ textcolor?: string }>(({ theme, textcolor }) => ({
    paddingRight: theme.spacing.petit,
    color: textcolor || theme.colors.common.white
}))