import { combineReducers } from 'redux'
import { PLAYER_MOVE, RESET_BOARD } from "../actionTypes/actions"

const initialState = {
    squares: Array(9).fill(null),
    playerTurn: 'X',
}

const moveReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_MOVE:
            return {
                squares: Object.assign([], state.squares, { [action.location]: state.playerTurn }),
                playerTurn: (state.playerTurn === 'X') ? 'O' : 'X',
            }
        case RESET_BOARD:
            return initialState
        default:
            return state
    }
}

export const ticTacToe = combineReducers({
    moveReducer
})

export default ticTacToe