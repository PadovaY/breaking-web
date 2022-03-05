import React, { useCallback, useState, useMemo } from 'react';

export enum FilterType {
    STATUS = 'STATUS',
    SEASON = 'SEASON'
}

interface FiltersContextValue {
    setFilterValue: (filterType: FilterType, value: string) => void;
    currentFilters: Record<FilterType, string | undefined>
}

export const FiltersContext = React.createContext<FiltersContextValue>({
    currentFilters: { STATUS: undefined, SEASON: undefined },
    setFilterValue: () => null
});

export const FiltersContextProvider: React.FC = ({ children }) => {
    const [currentFilters, setFilter] = useState({ STATUS: undefined, SEASON: undefined });

    const setFilterValue = useCallback(
        (filterType, filterValue) => {
            setFilter(prevFilters => ({
                ...prevFilters,
                [filterType]: filterValue
            }))
        },
        []
    );

    const value = useMemo(() => {
        return {
            currentFilters,
            setFilterValue
        };
    }, [currentFilters, setFilterValue]);

    return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
};
