import useStore, { Store } from './useStore'
import { stop, resume } from '../utils/bodyscroll'


const selector = ({ isSideOpen, closeSide, openSide }: Store) => { return { isSideOpen, closeSide, openSide } }

export default function useSide() {
    const { isSideOpen, closeSide, openSide } = useStore(selector)
    return { isSideOpen, closeSide: () => stop(closeSide), openSide: () => resume(openSide) }
}