import React from 'react';
import styled from 'styled-components';
import { Character } from '../../types';
import { Text } from '../Text/Text';

export const CharacterDetails: React.FC<{ char: Character }> = ({ char }) => {
    return (
        <DetailsContainer data-testid="charDetails">
            <Text text={`${char.name}`} />
            <Text text={`known as: ${char.nickname}`} />
            <Text text={`birthday: ${char.birthday}`} />
            <Text text={`portrayed: ${char.portrayed}`} />
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div(({ theme }) => ({
    padding: `${theme.spacing.small}px 0px 0px 0px`
}));