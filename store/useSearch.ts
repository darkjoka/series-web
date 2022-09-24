import useStore, { Store } from './useStore'
import { stop, resume } from '../utils/bodyscroll'


const selector = ({ isSearchOpen, closeSearch, openSearch }: Store) => { return { isSearchOpen, closeSearch, openSearch } }

export default function useSearch() {
    const { isSearchOpen, closeSearch, openSearch } = useStore(selector)
    return { isSearchOpen, closeSearch: () => stop(closeSearch), openSearch: () => resume(openSearch) }
}