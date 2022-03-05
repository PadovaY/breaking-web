import { useContext } from "react"
import { FiltersContext } from "../FiltersContext"

export const useFilters = () => {
    const { setFilterValue, currentFilters } = useContext(FiltersContext);
    return {setFilterValue, currentFilters}
}