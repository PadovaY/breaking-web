import React, { useCallback } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { StatusFilter } from '../Filter/StatusFilter';
import { SeasonFilter } from '../Filter/SeasonFilter';
import { theme } from '../../theme';
interface SearchBarProps {
    value?: string,
    onChange: (searchValue?: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    const onInputChange = useCallback((e) => onChange(e?.target?.value), []);

    return (
        <Container>
            <SearchContainer>
                <Text text="Search by name: " variant='body1' color={theme.colors.common.black} />
                <TextField data-testid="searchInput" label="type anything" variant="outlined" value={value} onChange={onInputChange} />
                <Filters>
                    <StatusFilter />
                    <SeasonFilter />
                </Filters>
            </SearchContainer>
        </Container>
    )
}

const Container = styled.div(({ theme }) => ({
    margin: theme.spacing.base
}));

const SearchContainer = styled.div(({ theme }) => ({
    margin: '0 auto',
    maxWidth: '50%',
    backgroundColor: theme.colors.common.white,
    borderRadius: theme.radius.main,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: `${theme.spacing.base}px`
}));

const Filters = styled.div(({ theme }) => ({
    width: 400,
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: theme.radius.sub,
    margin: '0 auto',
    padding: theme.spacing.base
}));