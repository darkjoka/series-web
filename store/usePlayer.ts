import useStore, { Store } from './useStore'
import { stop, resume } from '../utils/bodyscroll'


const selector = ({ isPlayerOpen, closePlayer, openPlayer }: Store) => { return { isPlayerOpen, closePlayer, openPlayer } }

export default function usePlayer() {
    const { isPlayerOpen, closePlayer, openPlayer } = useStore(selector)
    return { isPlayerOpen, closePlayer: () => stop(closePlayer), openPlayer: () => resume(openPlayer) }
}