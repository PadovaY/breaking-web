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
        <TypographyStyled variant={variant} textColor={color}>{text}</TypographyStyled>
    )
}

const TypographyStyled = styled(Typography)<{ textColor?: string }>(({ theme, textColor }) => ({
    paddingRight: theme.spacing.petit,
    color: textColor || theme.colors.common.white
}))