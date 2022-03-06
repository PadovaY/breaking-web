import React, { useCallback } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';


interface BaseFilterProps {
    onChange: (value: string) => void,
    value?: string;
    label: string;
    selections: string[]
}

export const BaseFilter: React.FC<BaseFilterProps> = ({ onChange, value, selections, label }) => {
    const onValueChange = useCallback(
        (e) => onChange(e?.target?.value as string),
        [])

    return (
        <FilterControl>
            <InputLabel>{label}</InputLabel>
            <Select
                data-testid={`filter-${label}`}
                value={value}
                label={label}
                onChange={onValueChange}
            >
                {['None', ...selections]
                    .map(selectionValue => <MenuItem
                        data-testid={`select-${selectionValue}`}
                        key={selectionValue} value={selectionValue === 'None' ? undefined : selectionValue}>
                        {selectionValue}
                    </MenuItem>)}
            </Select>
        </FilterControl>);
}

const FilterControl = styled(FormControl)(({ theme }) => ({
    width: 156,
    backgroundColor: theme.colors.common.white,
    borderRadius: theme.radius.sub,
    marginTop: theme.spacing.small,
}));