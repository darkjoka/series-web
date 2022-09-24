import useStore, { Store } from './useStore'
import { stop, resume } from '../utils/bodyscroll'


const selector = ({ isPlayerOpen, closePlayer, openPlayer, playerSrc, setPlayer }: Store) => {
    return {
        isPlayerOpen,
        closePlayer,
        openPlayer,
        playerSrc,
        setPlayer
    }
}

export default function usePlayer() {
    const { isPlayerOpen, closePlayer,
        openPlayer, playerSrc, setPlayer } = useStore(selector)

    return {
        isPlayerOpen,
        closePlayer: () => stop(closePlayer),
        openPlayer: () => resume(openPlayer),
        playerSrc,
        setPlayer
    }
}