import React from 'react';
import { Character } from '../../types';
import styled from 'styled-components';
import { CharacterDetails } from './CharacterDetails';


export const CharacterCard: React.FC<{ char: Character, onClick: () => void; }> = ({ char, onClick }) => {

    return (
        <CardContainer onClick={onClick} data-testid="charCard">
            <ImageContainer data-testid="charImage">
                <Image src={char.img} width="220px" />
            </ImageContainer>
            <CharacterDetails char={char} data-testid="charDetails" />
        </CardContainer>);
}

const CardContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '180px',
    justifyContent: 'center',
    alignItems: 'center',
    border: `${theme.colors.common.black} solid 3px`,
    backgroundColor: theme.colors.common.black,
    borderRadius: theme.radius.main,
    margin: `${theme.spacing.base / 2}px`,
    padding: theme.spacing.base
}));

const ImageContainer = styled.div(({ theme }) => ({
    borderRadius: theme.radius.main,
    height: '220px',
    width: '180px',
    overflow: 'hidden',
}));

const Image = styled.img(({ theme }) => ({
    borderRadius: theme.radius.sub
}))