import {PLAYER_MOVE} from '../actionTypes'

export const playerMove = (playerSymbol, index) => {
    return {
        type: PLAYER_MOVE,
        playerSymbol: playerSymbol,
        location: index,
    }
}