import axios from "axios";
import { BASE_API_URL } from "./App";
import { PAGE_SIZE } from "./CharacterFeed";
import { FilterType } from "./FiltersContext";
import { Character } from "./types";

export const filterData = (char: Character, currentFilters: Record<FilterType, string | undefined>) => {
    const isStatusFilterValid = currentFilters[FilterType.STATUS] ? char.status === currentFilters[FilterType.STATUS] : true
    const isSeasonFilterValid = currentFilters[FilterType.SEASON] ? char.appearance.includes(parseInt(currentFilters[FilterType.SEASON] || '0')) : true
    return isStatusFilterValid && isSeasonFilterValid;
}

export const fetchInitialData = ({ pageParam = 0 }) => axios.get(
    `${BASE_API_URL}/characters?limit=${PAGE_SIZE}&offset=${PAGE_SIZE * pageParam}`
).then(res => res.data)

export const fetchSearchData = ({ pageParam = 0, searchTerm = '' }) => axios.get(
    `${BASE_API_URL}/characters?name=${searchTerm?.replace(' ', '+')}&limit=${PAGE_SIZE}&offset=${PAGE_SIZE * pageParam}`
).then(res => res.data)