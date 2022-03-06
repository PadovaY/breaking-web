import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Character } from './types';
import { EndMessage } from './components/Loadrs/EndMessage';
import { LoaderMessage } from './components/Loadrs/LoaderMessage';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { FiltersContext } from './FiltersContext';
import { CharacterModal } from './components/CharacterModal/CharacterModal';
import { fetchInitialData, fetchSearchData, filterData } from './utils';

export const PAGE_SIZE = 15;

export const CharacterFeed = () => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
    const [selectedChar, setSelectedChar] = useState<Character | undefined>(undefined);
    const { currentFilters } = useContext(FiltersContext);
    const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
        "initialChars",
        fetchInitialData,
        {
            getNextPageParam: (lastPage, allPages) => lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined,
            enabled: !searchTerm
        },
    );

    const { data: searchData, isLoading: isSearchLoading, refetch } = useInfiniteQuery(
        "searchChars",
        ({ pageParam = 0 }) => fetchSearchData({ pageParam, searchTerm }),
        {
            getNextPageParam: (lastPage, allPages) => lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined,
            enabled: !!searchTerm?.length
        }
    );

    useEffect(() => {
        if (searchTerm) {
            refetch()
        }
    }, [searchTerm])

    const onModalClose = useCallback(() => setSelectedChar(undefined), []);

    const charsData = (searchTerm?.length ? searchData?.pages.flat() : data?.pages.flat()) || []
        .filter((char: Character) => filterData(char, currentFilters));
    const finishedLoadingData = !isLoading && charsData;

    return (
        <Container>
            <Header />
            <SearchBar onChange={setSearchTerm} />
            <InfiniteScroll
                dataLength={charsData.length}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={(isLoading || isSearchLoading) && <LoaderMessage />}
                endMessage={charsData.length && <EndMessage />}>
                <CharactersContainer>
                    {finishedLoadingData && charsData.map((char: Character) => <CharacterCard key={char.char_id} char={char} onClick={() => setSelectedChar(char)} />)}
                </CharactersContainer>
                <CharacterModal open={!!selectedChar?.char_id} onClose={onModalClose} char={selectedChar} />
            </InfiniteScroll>
        </Container >)
}

const Container = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.seaGreen,
    flex: 1,
    minHeight: '100%',
    flexDirection: 'column'
}))

const CharactersContainer = styled.div({
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center'
})
