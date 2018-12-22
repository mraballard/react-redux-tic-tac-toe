import { PLAYER_MOVE, RESET_BOARD } from '../actionTypes/actions'

export const playerMove = (playerSymbol, index) => {
    return {
        type: PLAYER_MOVE,
        location: index,
    }
}

export const resetBoard = () => {
    return {
        type: RESET_BOARD,
    }
}
