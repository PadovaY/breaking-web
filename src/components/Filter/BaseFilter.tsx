import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';


interface BaseFilterProps {
    onChange: (value: string) => void,
    value?: string;
    label: string;
    selections: string[]
}

export const BaseFilter: React.FC<BaseFilterProps> = ({ onChange, value, selections, label }) => {
    return (
        <FilterControl>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                value={value}
                label="Status"
                onChange={(e) => onChange(e?.target?.value as string)}
            >
                {['None', ...selections].map(value => <MenuItem key={value} value={value === 'None' ? undefined : value}>{value}</MenuItem>)}
            </Select>
        </FilterControl>);
}

const FilterControl = styled(FormControl)(({ theme }) => ({
    width: 156,
    backgroundColor: theme.colors.common.white,
    borderRadius: theme.radius.sub,
    marginTop: theme.spacing.small,
}));