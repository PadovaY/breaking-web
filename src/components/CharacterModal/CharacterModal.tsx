import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Character } from '../../types';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Text } from '../Text/Text';
import styled from 'styled-components';
import { theme } from '../../theme';

interface CharacterModalProps {
    open: boolean;
    onClose: () => void;
    char?: Character
}

const DISALLOWED_FIELDS = ['char_id', 'better_call_saul_appearance', 'img'];

export const CharacterModal: React.FC<CharacterModalProps> = ({ open, onClose, char }) => {
    if (!char) {
        return null;
    }

    const charDetails = Object.entries(char)
        .filter(([key]) => !DISALLOWED_FIELDS.includes(key))
        .map(([key, value]) => `${key}: ${value}`);

    return (
        <Dialog open={open} onClose={onClose} data-testid="characterModal">
            <DialogTitle>
                {char?.name}
                <IconButton
                    data-testid="closeModal"
                    aria-label="close"
                    onClick={onClose}
                    sx={closeStyle}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent >
                <ImageContainer>
                    <img src={char.img} height="400" />
                </ImageContainer>
            </DialogContent>
            <DetailsContainer>
                {charDetails.map((detail) => <Text key={detail} text={detail} color={theme.colors.common.black} />)}
            </DetailsContainer>
        </Dialog >
    )
}

const DetailsContainer = styled.div(({ theme }) => ({
    padding: theme.spacing.base
}));

const ImageContainer = styled.div({
    display: 'flex',
    justifyContent: 'center'
})

const closeStyle = {
    position: 'absolute',
    right: 8,
    top: 8
}