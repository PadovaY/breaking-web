import React from 'react';
import { BaseFilter } from './BaseFilter';
import { useFilters } from '../../hooks/useFilters';
import { FilterType } from '../../FiltersContext';

const SEASON_LIST = ['1', '2', '3', '4', '5'];

export const SeasonFilter: React.FC = () => {
    const { setFilterValue, currentFilters } = useFilters();
    return (
        <BaseFilter
            label="Season"
            onChange={value => setFilterValue(FilterType.SEASON, value)}
            value={currentFilters[FilterType.SEASON]}
            selections={SEASON_LIST} />);
}
