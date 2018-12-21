import { PLAYER_MOVE } from '../actionTypes/actions'

export const playerMove = (playerSymbol, index) => {
    return {
        type: PLAYER_MOVE,
        location: index,
    }
}
