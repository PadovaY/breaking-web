import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { theme } from '../../theme';
import { StatusFilter } from '../Filter/StatusFilter';
import { SeasonFilter } from '../Filter/SeasonFilter';
interface SearchBarProps {
    value?: string,
    onChange: (searchValue?: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    const onInputChange = useCallback((e) => onChange(e?.target?.value), []);

    return (
        <Container>
            <SearchContainer>
                <Text text="Search by name: " />
                <TextField label="type anything" variant="outlined" value={value} onChange={onInputChange} />
            </SearchContainer>
            <Filters>
                <StatusFilter />
                <SeasonFilter />
            </Filters>
        </Container>
    )
}

const Container = styled.div(({ theme }) => ({
    margin: theme.spacing.base
}));

const SearchContainer = styled.div(({ theme }) => ({
    height: 100,
    margin: '0 auto',
    width: '50%',
    backgroundColor: theme.colors.common.white,
    borderRadius: theme.radius.main,
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing.base}px`
}));

const Filters = styled.div(({ theme }) => ({
    width: 400,
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: theme.radius.sub,
    margin: '0 auto',
    padding: theme.spacing.base
}));