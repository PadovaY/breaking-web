import React from 'react';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TextProps {
    text: string;
    variant?: "inherit" | Variant;
}

export const Text: React.FC<TextProps> = ({ text, variant = 'subtitle1' }) => {
    return (
        <Typography variant={variant}>{text}</Typography>
    )

}