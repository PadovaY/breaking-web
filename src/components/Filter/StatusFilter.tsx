import React from 'react';
import { BaseFilter } from './BaseFilter';
import { useFilters } from '../../hooks/useFilters';
import { FilterType } from '../../FiltersContext';

const STATUS_LIST = ['Alive', 'Deceased']

export const StatusFilter: React.FC = () => {
    const { setFilterValue, currentFilters } = useFilters();
    return (
        <BaseFilter
            label="Status"
            onChange={value => setFilterValue(FilterType.STATUS, value)}
            value={currentFilters[FilterType.STATUS]}
            selections={STATUS_LIST} />);
}
