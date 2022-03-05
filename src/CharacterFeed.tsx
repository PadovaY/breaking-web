import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { BASE_API_URL } from './App';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Character } from './types';
import { EndMessage } from './components/Loadrs/EndMessage';
import { LoaderMessage } from './components/Loadrs/LoaderMessage';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { FiltersContext, FilterType } from './FiltersContext';
import { CharacterModal } from './components/CharacterModal/CharacterModal';

const PAGE_SIZE = 15;

export const CharacterFeed = () => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
    const [selectedChar, setSelectedChar] = useState<Character | undefined>(undefined);
    const { currentFilters } = useContext(FiltersContext);
    const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
        "initialChars",
        ({ pageParam = 0 }) => axios.get(
            `${BASE_API_URL}/characters?limit=${PAGE_SIZE}&offset=${PAGE_SIZE * pageParam}`
        ).then(res => res.data),
        {
            getNextPageParam: (lastPage, allPages) => lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined,
            enabled: !searchTerm
        },
    );

    const { data: searchData, isLoading: isSearchLoading, refetch } = useInfiniteQuery(
        "searchChars",
        ({ pageParam = 0 }) => axios.get(
            `${BASE_API_URL}/characters?name=${searchTerm?.replace(' ', '+')}&limit=${PAGE_SIZE}&offset=${PAGE_SIZE * pageParam}`
        ).then(res => res.data),
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

    const charsData = (searchTerm?.length ? searchData?.pages.flat() || [] : data?.pages.flat() || []).filter((char: Character) => {
        const isStatusFilterValid = currentFilters[FilterType.STATUS] ? char.status === currentFilters[FilterType.STATUS] : true
        const isSeasonFilterValid = currentFilters[FilterType.SEASON] ? char.appearance.includes(parseInt(currentFilters[FilterType.SEASON] || '0')) : true
        return isStatusFilterValid && isSeasonFilterValid;
    });

    return (
        <Container>
            <Header />
            <SearchBar onChange={setSearchTerm} />
            <InfiniteScroll
                dataLength={charsData.length}
                next={fetchNextPage}
                hasMore={hasNextPage || false}
                loader={(isLoading || isSearchLoading) && <LoaderMessage />}
                endMessage={charsData.length && <EndMessage />}>
                <CharactersContainer>
                    {!isLoading && data && charsData.map((char: Character) => <CharacterCard key={char.char_id} char={char} onClick={() => setSelectedChar(char)} />)}
                </CharactersContainer>
                <CharacterModal open={!!selectedChar?.char_id} onClose={() => setSelectedChar(undefined)} char={selectedChar} />
            </InfiniteScroll>
        </Container >)
}

const Container = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.common.black,
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

